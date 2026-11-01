import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-postuler',
  imports: [FormsModule, RouterLink],
  templateUrl: './postuler.html',
  styleUrl: './postuler.css',
})
export class Postuler implements OnInit {
  offreId = '';

  nom = '';
  prenom = '';
  email = '';
  telephone = '';
  motivation = '';

  messageConfirmation = '';
  messageErreur = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.offreId = this.route.snapshot.paramMap.get('id') || '';
  }

  envoyerCandidature(): void {
    this.messageErreur = '';
    this.messageConfirmation = '';

    if (
      !this.nom.trim() ||
      !this.prenom.trim() ||
      !this.email.trim() ||
      !this.telephone.trim() ||
      !this.motivation.trim()
    ) {
      this.messageErreur = 'Veuillez remplir tous les champs.';
      return;
    }

    const candidature = {
      id: Date.now(),
      offreId: this.offreId,
      nom: this.nom.trim(),
      prenom: this.prenom.trim(),
      email: this.email.trim(),
      telephone: this.telephone.trim(),
      motivation: this.motivation.trim(),
      dateCandidature: new Date().toISOString()
    };

    try {
      const candidatures = JSON.parse(
        localStorage.getItem('candidatures') || '[]'
      );

      candidatures.push(candidature);

      localStorage.setItem('candidatures', JSON.stringify(candidatures));

      this.messageConfirmation = 'Votre candidature a été envoyée avec succès !';

      this.nom = '';
      this.prenom = '';
      this.email = '';
      this.telephone = '';
      this.motivation = '';
    } catch {
      this.messageErreur = "Une erreur est survenue lors de l'envoi.";
    }
  }
}
