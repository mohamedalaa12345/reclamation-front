import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})

export class UtilisateurComponent implements OnInit {
  pageOfItems: Array<any>;
  Activé= 0;
  users ;
  constructor(private userService: UtilisateursService,private httpClient: HttpClient, private auth: AuthenticationService) { }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}



  ngOnInit() {
  }

  
  getAllUser() {
    this.userService.getAllUser()
      .subscribe(
        data => {
          let dataEmbeded = data['_embedded'];
          this.users = dataEmbeded['users'];
          // this.initiliazePagination(this.users);
        },
        err => { console.log(err) }

      )
  }
  isActive(){
    return this.Activé;
    //this.roles.indexOf('Etat') >= 0
  }
  Active(){
    if (this.Activé != 1) {
      this.Activé = 1;
    } else {
      this.Activé = 0;
    }
  }
  OnDeleteUser(d) {
    let c = confirm("Etes vous sûre ?");
    if (!c) return;
    console.log("Delete");
    this.auth.deleteRessource(d._links.self.href).
      subscribe(
        data => {
          this.getAllUser();
        },
        err => { console.log(err); }
      )
  }
  isAdmin()
  {
      return this.auth.isAdmin();
  }

  isUser()
  {
      return this.auth.isUser();
  }
  isUser1()
  {
      return this.auth.isUser1();
  }

}
