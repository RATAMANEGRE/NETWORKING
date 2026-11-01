
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  selector: 'app-detail-offre',
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-offre.html',
  styleUrl: './detail-offre.css',
})
export class DetailOffre implements OnInit {

  offre: Offre | undefined = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const donnees = localStorage.getItem('offresPubliees');

    const offres: Offre[] = donnees ? JSON.parse(donnees) : [];

    this.offre = offres.find(offre => offre.id === id);
  }
}

