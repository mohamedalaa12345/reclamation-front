import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuardsService } from './services/auth-guards.service';
import { AuthenticationService } from './services/authentication.service';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import * as $ from 'jquery';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AdminDoctorantsComponent } from './components/reclamations/admin-doctorants.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminMessageComponent } from './components/Notification/admin-message.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InformationComponent } from './pages/information/information.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { TransportComponent } from './pages/transport/transport.component';
import { RapportComponent } from './pages/rapport/rapport.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { LigneComponent } from './pages/ligne/ligne.component';
import { DepotComponent } from './pages/depot/depot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StationComponent } from './pages/station/station.component';
import { EquipementSComponent } from './components/equipement-s/equipement-s.component';

//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AdminLayoutComponent,
    NotfoundComponent,
    SidebarComponent,
    MenubarComponent,
    AdminDoctorantsComponent,
    AdminProfileComponent,
    AdminMessageComponent,
    ContactComponent,
    InformationComponent,
    JwPaginationComponent,
    InscriptionComponent,
    TransportComponent,
    RapportComponent,
    UtilisateurComponent,
    StatistiqueComponent,
    LigneComponent,
    DepotComponent,
    StationComponent,
    EquipementSComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    
    
    
    // AgmCoreModule.forRoot({
    //   apiKey : `441974f7c4mshc33863cd76d2637p18376djsna8695e96407d`
    // })
  ],
  providers: [AuthenticationService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
