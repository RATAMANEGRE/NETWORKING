import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  nom = '';
  email = '';
  sujet = '';
  message = '';

  messageConfirmation = '';

  envoyerMessage() {

    if (
      !this.nom.trim() ||
      !this.email.trim() ||
      !this.sujet.trim() ||
      !this.message.trim()
    ) {
      this.messageConfirmation = 'Veuillez remplir tous les champs.';
      return;
    }

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValide.test(this.email)) {
      this.messageConfirmation = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    this.messageConfirmation = 'Votre message a été pris en compte avec succès !';

    this.nom = '';
    this.email = '';
    this.sujet = '';
    this.message = '';
  }
}
