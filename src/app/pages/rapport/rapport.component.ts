import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  annonceClicked;
  closeResult;
  mode = 'list';
  pageOfItems: Array<any>;
  rapport=[];
  constructor(private modalService: NgbModal,private RapportService:RapportService ,private auth: AuthenticationService) {
   
  }


  detaille() {
    if (this.mode != 'detaille') {
      this.mode = 'detaille';
    } else {
      this.mode = 'list';
    }
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onCancel()
{
  this.mode='list';
}
OnDeleteRapport(d) {
  let c = confirm("Etes vous sûre ?");
  if (!c) return;
  console.log("Delete");
  this.RapportService.deleteRessource(d._links.self.href).
    subscribe(
      data => {
        this.getAllRapport();
      },
      err => { console.log(err); }
    )
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

 
  getAllRapport() {
    this.RapportService.getAllRapport()
      .subscribe(
        data => {
          let dataEmbeded = data['_embedded'];
          this.rapport = dataEmbeded['rapport'];
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
