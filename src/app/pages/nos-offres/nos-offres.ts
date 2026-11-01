// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-nos-offres',
//   styleUrl: './nos-offres.css',
//   templateUrl: './nos-offres.html',
// })
// export class NosOffres {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Offre {
  id: number;
  titre: string;
  entreprise: string;
  domaine: string;
  contrat: string;
  localisation: string;
  dateLimite: string;
  description: string;
  competences: string;
  datePublication: string;
}

@Component({
  selector: 'app-nos-offres',
  imports: [CommonModule, RouterLink],
  templateUrl: './nos-offres.html',
  styleUrl: './nos-offres.css',
})
export class NosOffres implements OnInit {

  offres: Offre[] = [];

  ngOnInit(): void {
    this.chargerOffres();
  }

  chargerOffres(): void {
    const donnees = localStorage.getItem('offresPubliees');

    this.offres = donnees ? JSON.parse(donnees) : [];
  }
}
