// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   imports: [RouterLink],
//   selector: 'app-connexion',
//   styleUrl: './connexion.css',
//   templateUrl: './connexion.html',
// })
// export class Connexion {}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, FormsModule],
  selector: 'app-connexion',
  styleUrl: './connexion.css',
  templateUrl: './connexion.html',
})
export class Connexion {
  email = '';
  motDePasse = '';

  messageConfirmation = '';
  messageErreur = '';

  afficherRecuperation = false;
  messageRecuperation = '';

  private emailEstValide(email: string): boolean {
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValide.test(email.trim());
  }

  seConnecter(): void {
    this.messageConfirmation = '';
    this.messageErreur = '';

    if (!this.email.trim() || !this.motDePasse) {
      this.messageErreur = 'Veuillez remplir tous les champs.';
      return;
    }

    if (!this.emailEstValide(this.email)) {
      this.messageErreur = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    if (this.motDePasse.length < 8) {
      this.messageErreur = 'Le mot de passe doit contenir au moins 8 caractères.';
      return;
    }

    this.messageConfirmation =
      'Formulaire validé ! La connexion sera disponible après la mise en place du Backend.';
  }

  ouvrirRecuperation(): void {
    this.afficherRecuperation = true;
    this.messageRecuperation = '';
  }

  demanderReinitialisation(): void {
    this.messageRecuperation = '';

    if (!this.email.trim()) {
      this.messageRecuperation = 'Veuillez saisir votre adresse e-mail.';
      return;
    }

    if (!this.emailEstValide(this.email)) {
      this.messageRecuperation = 'Veuillez saisir une adresse e-mail valide.';
      return;
    }

    this.messageRecuperation =
      'Votre demande a été prise en compte. La réinitialisation sera disponible après la mise en place du Backend.';
  }

  fermerRecuperation(): void {
    this.afficherRecuperation = false;
    this.messageRecuperation = '';
  }
}
