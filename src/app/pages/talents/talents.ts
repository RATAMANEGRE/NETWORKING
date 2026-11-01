// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-talents',
//   styleUrl: './talents.css',
//   templateUrl: './talents.html',
// })
// export class Talents {}

// import { Component, signal, computed } from '@angular/core';

// @Component({
//   selector: 'app-talents',
//   imports: [],
//   templateUrl: './talents.html',
//   styleUrl: './talents.css',
// })
// export class Talents {

//   // Liste des talents de démonstration
//   talents = signal([
//     {
//       nom: 'Talent 1',
//       initiales: 'TA',
//       domaine: 'Développeur Web',
//       description: "Développement d'applications web et mobiles."
//     },
//     {
//       nom: 'Talent 2',
//       initiales: 'TB',
//       domaine: 'Data Analyst',
//       description: 'Analyse et visualisation des données.'
//     },
//     {
//       nom: 'Talent 3',
//       initiales: 'TC',
//       domaine: 'Designer UI/UX',
//       description: "Conception d'interfaces et expériences utilisateur."
//     }
//   ]);

//   // Texte saisi dans la barre de recherche
//   recherche = signal('');

//   // Liste filtrée automatiquement
//   talentsFiltres = computed(() => {
//     const terme = this.recherche().toLowerCase().trim();

//     return this.talents().filter(talent =>
//       talent.nom.toLowerCase().includes(terme) ||
//       talent.domaine.toLowerCase().includes(terme) ||
//       talent.description.toLowerCase().includes(terme)
//     );
//   });
// }

import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talents',
  imports: [RouterLink],
  templateUrl: './talents.html',
  styleUrl: './talents.css',
})
export class Talents {

  talents = signal([
    {
      id: 1,
      nom: 'Talent 1',
      initiales: 'TA',
      domaine: 'Développeur Web',
      description: "Développement d'applications web et mobiles."
    },
    {
      id: 2,
      nom: 'Talent 2',
      initiales: 'TB',
      domaine: 'Data Analyst',
      description: 'Analyse et visualisation des données.'
    },
    {
      id: 3,
      nom: 'Talent 3',
      initiales: 'TC',
      domaine: 'Designer UI/UX',
      description: "Conception d'interfaces et expériences utilisateur."
    }
  ]);

  recherche = signal('');

  talentsFiltres = computed(() => {
    const terme = this.recherche().toLowerCase().trim();

    return this.talents().filter(talent =>
      talent.nom.toLowerCase().includes(terme) ||
      talent.domaine.toLowerCase().includes(terme) ||
      talent.description.toLowerCase().includes(terme)
    );
  });
}
