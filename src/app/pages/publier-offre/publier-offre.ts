
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-publier-offre',
  styleUrl: './publier-offre.css',
  templateUrl: './publier-offre.html',
})
export class PublierOffre {

  titre = '';
  entreprise = '';
  domaine = '';
  contrat = '';
  localisation = '';
  dateLimite = '';
  description = '';
  competences = '';

  messageConfirmation = '';
  messageErreur = '';

  publierOffre(): void {

    this.messageConfirmation = '';
    this.messageErreur = '';

    if (
      !this.titre.trim() ||
      !this.entreprise.trim() ||
      !this.domaine ||
      !this.contrat ||
      !this.localisation.trim() ||
      !this.dateLimite ||
      !this.description.trim() ||
      !this.competences.trim()
    ) {
      this.messageErreur = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    const nouvelleOffre = {
      id: Date.now(),
      titre: this.titre.trim(),
      entreprise: this.entreprise.trim(),
      domaine: this.domaine,
      contrat: this.contrat,
      localisation: this.localisation.trim(),
      dateLimite: this.dateLimite,
      description: this.description.trim(),
      competences: this.competences.trim(),
      datePublication: new Date().toISOString()
    };

    try {
      const offresExistantes = JSON.parse(
        localStorage.getItem('offresPubliees') || '[]'
      );

      offresExistantes.push(nouvelleOffre);

      localStorage.setItem(
        'offresPubliees',
        JSON.stringify(offresExistantes)
      );

      this.messageConfirmation = 'Votre offre a été publiée avec succès !';

      this.reinitialiserFormulaire();

    } catch {
      this.messageErreur = 'Une erreur est survenue lors de la publication.';
    }
  }

  reinitialiserFormulaire(): void {
    this.titre = '';
    this.entreprise = '';
    this.domaine = '';
    this.contrat = '';
    this.localisation = '';
    this.dateLimite = '';
    this.description = '';
    this.competences = '';
  }
}
