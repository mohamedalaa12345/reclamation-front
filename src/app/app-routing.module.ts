
import { InformationComponent } from './pages/information/information.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
//import { AuthSideBarGuardsService } from './services/auth-sidebar-guards.service';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminMessageComponent } from './components/Notification/admin-message.component';
import { AdminDoctorantsComponent } from './components/reclamations/admin-doctorants.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuardsService } from './services/auth-guards.service';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { TransportComponent } from './pages/transport/transport.component';
import { RapportComponent } from './pages/rapport/rapport.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { LigneComponent } from './pages/ligne/ligne.component';
import { DepotComponent } from './pages/depot/depot.component';
import { StationComponent } from './pages/station/station.component';
import { AuthGuardsService } from './services/auth-guards.service';
import { EquipementSComponent } from './components/equipement-s/equipement-s.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  
  {
   path: 'menu', /*canActivate: [AuthGuardsService],*/ component: AdminLayoutComponent, children: [
      { path: 'reclamation', /*canActivate: [AuthGuardsService],*/  component: AdminDoctorantsComponent },
      { path: 'message', component: AdminMessageComponent },
      { path: 'profile', component: AdminProfileComponent },
      { path: 'equipement', component: EquipementSComponent },
      { path: 'inscription', component: InscriptionComponent },
      //{ path: 'map', component: MapComponent },
      { path: 'transport', component: TransportComponent },
      { path: 'rapport', component: RapportComponent },
      { path: 'utilisateur', component: UtilisateurComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'ligne', component: LigneComponent},
      { path: 'depot', component: DepotComponent },
      { path: 'station', component: StationComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'annonce', component: InformationComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
