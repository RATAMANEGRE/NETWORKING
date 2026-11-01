// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-accueil',
//   styleUrl: './accueil.css',
//   templateUrl: './accueil.html',
// })
// export class Accueil {}


import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { WhyUs } from '../../components/why-us/why-us';
import { OdcCenter } from '../../components/odc-center/odc-center';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-accueil',
  imports: [
    Hero,
    WhyUs,
    OdcCenter,
    Footer
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {}
