import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DepotService } from 'src/app/services/depot.service';
import { LigneService } from 'src/app/services/ligne.service';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.scss']
})
export class LigneComponent implements OnInit {

  annonceClicked;
  closeResult;
  mode = 'list';
  pageOfItems: Array<any>;
  ligne;
  depot;
  constructor(private modalService: NgbModal,private ligneService:LigneService ,private auth: AuthenticationService,private depotservice: DepotService) {
   
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onCancel()
{
  this.mode='list';
}
OnDeletetransport(d) {
  let c = confirm("Etes vous sûre ?");
  if (!c) return;
  console.log("Delete");
  this.ligneService.deleteRessource(d._links.self.href).
    subscribe(
      data => {
        this.getAllligne();
      },
      err => { console.log(err); }
    )
}

  ngOnInit() {
  }
  open(content,ligne) {
    this.annonceClicked=ligne;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  onNewLigne() {
    if (this.mode != 'new-ligne') {
      this.mode = 'new-ligne';
    } else {
      this.mode = 'list';
    }
  }
  getAllligne() {
    this.ligneService.getAllLigne()
      .subscribe(
        data => {
          let dataEmbeded = data['_embedded'];
          this.ligne = dataEmbeded['lignes'];
        },
        err => { console.log(err) }

      )
  }
  onEditLigne(){
    if (this.mode != 'edit-ligne') {
      this.mode = 'edit-ligne';
    } else {
      this.mode = 'list';
    }

  }
  Detaille(){
    if (this.mode != 'detaille') {
      this.mode = 'detaille';
    } else {
      this.mode = 'list';
    }
  }
  onSaveligne(value) {
  console.log(value);
     this.mode = 'list';
     const path = '/lignes';
     this.ligneService.postRessource(path, value).
       subscribe(
         data => {
           this.getAllligne();
           //this.loadPage(this.paginationService.getNumberOfPages() - 1);
         },
        err => {
          console.log(err);
         }
       );
   }
   getAllDepot() {
    this.depotservice.getAllDepot()
      .subscribe(
        data => {
          let dataEmbeded = data['_embedded'];
          this.depot = dataEmbeded['District'];
          // this.initiliazePagination(this.users);
        },
        err => { console.log(err) }

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
