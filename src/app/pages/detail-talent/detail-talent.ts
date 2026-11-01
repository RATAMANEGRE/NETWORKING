// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-detail-talent',
//   styleUrl: './detail-talent.css',
//   templateUrl: './detail-talent.html',
// })
// export class DetailTalent {}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cv } from '../../services/cv';

@Component({
  selector: 'app-detail-talent',
  imports: [RouterLink],
  templateUrl: './detail-talent.html',
  styleUrl: './detail-talent.css',
})
export class DetailTalent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cvService: Cv
  ) {}

  talents = [
    {
      id: 1,
      nom: 'Talent 1',
      initiales: 'TA',
      domaine: 'Développeur Web',
      description: "Développement d'applications web et mobiles.",
      apropos: "Je suis passionné par le développement web et mobile.",
      competences: ['HTML', 'CSS', 'JavaScript', 'Angular']
    },
    {
      id: 2,
      nom: 'Talent 2',
      initiales: 'TB',
      domaine: 'Data Analyst',
      description: 'Analyse et visualisation des données.',
      apropos: "Je suis passionné par l'analyse et l'exploitation des données.",
      competences: ['Excel', 'Power BI', 'SQL', 'Python']
    },
    {
      id: 3,
      nom: 'Talent 3',
      initiales: 'TC',
      domaine: 'Designer UI/UX',
      description: "Conception d'interfaces et expériences utilisateur.",
      apropos: "Je suis passionné par la conception d'interfaces numériques.",
      competences: ['Figma', 'UI Design', 'UX Design', 'Prototypage']
    }
  ];

  talent: any;

  cvUrl: string | null = null;
  cvName = '';

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.talent = this.talents.find(t => t.id === id);

    if (this.talent) {
      const cv = await this.cvService.obtenirCv();

      if (cv) {
        this.cvUrl = URL.createObjectURL(cv);
        this.cvName = cv.name;
      }
    }
  }
}
