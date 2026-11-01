import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule, RouterLink],
  styleUrl: './inscription.css',
  templateUrl: './inscription.html',
})
export class Inscription {

  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  confirmationMotDePasse = '';

  messageConfirmation = '';
  messageErreur = '';

  inscrire(): void {

    this.messageConfirmation = '';
    this.messageErreur = '';

    if (
      !this.nom.trim() ||
      !this.prenom.trim() ||
      !this.email.trim() ||
      !this.motDePasse ||
      !this.confirmationMotDePasse
    ) {
      this.messageErreur = 'Veuillez remplir tous les champs.';
      return;
    }

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValide.test(this.email.trim())) {
      this.messageErreur = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    if (this.motDePasse.length < 8) {
      this.messageErreur = 'Le mot de passe doit contenir au moins 8 caractères.';
      return;
    }

    if (this.motDePasse !== this.confirmationMotDePasse) {
      this.messageErreur = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.messageConfirmation = 'Inscription réussie ! Votre formulaire a été validé.';

    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.motDePasse = '';
    this.confirmationMotDePasse = '';
  }
}
