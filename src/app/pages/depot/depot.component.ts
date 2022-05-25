import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DepotService } from 'src/app/services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {

  annonceClicked;
  closeResult;
  mode = 'list';
  pageOfItems: Array<any>;
  depot;
  constructor(private modalService: NgbModal,private depotService:DepotService ,private auth: AuthenticationService) {
   // this.getAllAnnonce();
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onCancel()
{
  this.mode='list';
}
onSaveDepot(value) {
  console.log(value);
     this.mode = 'list';
     const path = '/depots';
     this.depotService.postRessource(path, value).
       subscribe(
         data => {
           this.getAllDepot();
           //this.loadPage(this.paginationService.getNumberOfPages() - 1);
         },
        err => {
          console.log(err);
         }
       );
   }

  ngOnInit() {
  }
  open(content,annonce) {
    this.annonceClicked=annonce;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  // getAllAnnonce() {
  //   this.annonceService.getAllAnnonces().subscribe(
  //     data => {
  //       this.annonces = data;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  onNewDepot() {
    if (this.mode != 'new-depot') {
      this.mode = 'new-depot';
    } else {
      this.mode = 'list';
    }
  }
  getAllDepot() {
    this.depotService.getAllDepot()
      .subscribe(
        data => {
          let dataEmbeded = data['_embedded'];
          this.depot = dataEmbeded['depots'];
          // this.initiliazePagination(this.users);
        },
        err => { console.log(err) }

      )
  }
  onEditLigne(){
    if (this.mode != 'edit-depot') {
      this.mode = 'edit-depot';
    } else {
      this.mode = 'list';
    }

  }
  // onSaveAnnonce(value) {
  //   console.log(value);
  //   this.mode = 'list';
  //   const path = '/annonces';
  //   this.annonceService.postRessource(path, value).
  //     subscribe(
  //       data => {
  //         this.getAllAnnonce();
  //         //this.loadPage(this.paginationService.getNumberOfPages() - 1);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }
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
