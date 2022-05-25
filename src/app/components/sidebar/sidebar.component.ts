import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    role :string;
    icon: string;
    class: string;

}
export const ROUTES: RouteInfo[] = [
    { path: '/menu/reclamation', title: 'reclamation',role:'ADMIN' , icon: 'now-ui-icons education_hat', class: '' },
    { path: '/menu/rapport', title: 'Rapport', role:'USER1' ,  icon:'now-ui-icons files_single-copy-04', class: '' },
    { path: '/menu/profile', title: 'Profile', role:'USER1' ,  icon:'now-ui-icons users_single-02', class: '' },
    { path: '/menu/test', title: 'Annonces', role:'ADMIN' ,  icon:'now-ui-icons ui-1_calendar-60', class: '' },
    { path: '/menu/inscription', title: 'Nouvel Utilisateur', role:'ADMIN' ,  icon:'now-ui-icons users_single-02', class: '' },
    { path: '/menu/map', title: 'Maps', role:'ADMIN' ,  icon:'now-ui-icons users_single-02', class: '' },
    { path: '/menu/transport', title: 'Transport', role:'ADMIN' ,  icon:'now-ui-icons bus-front-12', class: '' },
    { path: '/menu/utilisateur', title: 'Utilisateur', role:'ADMIN' ,  icon:'now-ui-icons bus-front-12', class: '' },
    { path: '/menu/station', title: 'station', role:'ADMIN' ,  icon:'now-ui-icons bus-front-12', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
       if ($(window).width() > 700) {
          return false;
      }
      return true;
  };
  isAdmin()
  {
      return true ;//this.auth.isAdmin();
  }

  isUser()
  {
      return false ;//this.auth.isUser();
  }
  isUser1()
  {
      return false ;//this.auth.isUser1();
  }
  
}
