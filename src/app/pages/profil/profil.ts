
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cv } from '../../services/cv';

@Component({
  imports: [FormsModule],
  selector: 'app-profil',
  styleUrl: './profil.css',
  templateUrl: './profil.html',
})
export class Profil implements OnInit {

  // Informations personnelles
  nom = '';
  prenom = '';
  email = '';
  telephone = '';

  // Informations professionnelles
  domaine = '';
  competences = '';
  apropos = '';

  // Gestion du CV
  cvName = '';
  cvUrl: string | null = null;
  cvError = '';

  // Message après enregistrement
  messageConfirmation = '';

  constructor(private cvService: Cv) {}

  async ngOnInit() {
  this.chargerProfil();

  try {
    const cv = await this.cvService.obtenirCv();

    if (cv) {
      this.cvName = cv.name;
      this.cvUrl = URL.createObjectURL(cv);
    }
  } catch (error) {
    this.cvError = 'Impossible de récupérer le CV enregistré.';
  }
}
chargerProfil() {
  const profilEnregistre = localStorage.getItem('profilUtilisateur');

  if (profilEnregistre) {
    const profil = JSON.parse(profilEnregistre);

    this.nom = profil.nom || '';
    this.prenom = profil.prenom || '';
    this.email = profil.email || '';
    this.telephone = profil.telephone || '';
    this.domaine = profil.domaine || '';
    this.competences = profil.competences || '';
    this.apropos = profil.apropos || '';
  }
}

  async onCvSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  this.cvError = '';
  this.messageConfirmation = '';

  if (!file) return;

  if (file.type !== 'application/pdf') {
    this.cvError = 'Veuillez sélectionner un fichier PDF.';
    input.value = '';
    return;
  }

  try {
    await this.cvService.enregistrerCv(file);

    if (this.cvUrl) {
      URL.revokeObjectURL(this.cvUrl);
    }

    this.cvName = file.name;
    this.cvUrl = URL.createObjectURL(file);

  } catch (error) {
    this.cvError = 'Une erreur est survenue pendant l’enregistrement du CV.';
    input.value = '';
  }
}
  enregistrerProfil() {
    if (
      !this.nom.trim() ||
      !this.prenom.trim() ||
      !this.email.trim() ||
      !this.telephone.trim() ||
      !this.domaine.trim()
    ) {
      this.messageConfirmation = 'Veuillez remplir les champs obligatoires.';
      return;
    }

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValide.test(this.email)) {
      this.messageConfirmation = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    this.sauvegarderProfil();
    this.messageConfirmation = 'Votre profil a été enregistré avec succès !';
  }

  sauvegarderProfil() {
    const profil = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      telephone: this.telephone,
      domaine: this.domaine,
      competences: this.competences,
      apropos: this.apropos
    };

    localStorage.setItem('profilUtilisateur', JSON.stringify(profil));
  }
  async supprimerCv() {
  try {
    await this.cvService.supprimerCv();

    if (this.cvUrl) {
      URL.revokeObjectURL(this.cvUrl);
    }

    this.cvUrl = null;
    this.cvName = '';
    this.cvError = '';
    this.messageConfirmation = 'Votre CV a été supprimé avec succès !';

  } catch (error) {
    this.cvError = 'Impossible de supprimer le CV.';
  }
}
reinitialiserFormulaire(): void {
  const confirmation = window.confirm(
    'Voulez-vous vraiment effacer toutes les informations de votre profil ?'
  );

  if (confirmation) {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.domaine = '';
    this.competences = '';
    this.apropos = '';

    localStorage.removeItem('profilUtilisateur');

    this.messageConfirmation = 'Les informations du formulaire ont été effacées.';
  }
}
}
