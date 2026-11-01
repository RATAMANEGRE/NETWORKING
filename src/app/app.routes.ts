// import { Routes } from '@angular/router';


//
import { Routes } from '@angular/router';

import { Accueil } from './pages/accueil/accueil';
import { Connexion } from './pages/connexion/connexion';
import { Inscription } from './pages/inscription/inscription';
import { Entreprises } from './pages/entreprises/entreprises';
import { Profil } from './pages/profil/profil';
import { Talents } from './pages/talents/talents';
import { DetailTalent } from './pages/detail-talent/detail-talent';
import { APropos } from './pages/a-propos/a-propos';
import { Contact } from './pages/contact/contact';
import { ConditionsUtilisation } from './pages/conditions-utilisation/conditions-utilisation';
import { PublierOffre } from './pages/publier-offre/publier-offre';
import { NosOffres } from './pages/nos-offres/nos-offres';
import { DetailOffre } from './pages/detail-offre/detail-offre';
import { Postuler } from './pages/postuler/postuler';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'connexion', component: Connexion },
  { path: 'inscription', component: Inscription },
  { path: 'entreprises', component: Entreprises },
  { path: 'talents', component: Talents },
  { path: 'profil', component: Profil },
  { path: 'talent/:id', component: DetailTalent },
  { path: 'a-propos', component: APropos },
  { path: 'contact', component: Contact },
  { path: 'conditions-utilisation', component: ConditionsUtilisation },
  { path: 'publier-offre', component: PublierOffre },
  { path: 'nos-offres', component: NosOffres },
  { path: 'offre/:id', component: DetailOffre },
  { path: 'postuler/:id', component: Postuler },
  { path: '**', redirectTo: '' },

];
