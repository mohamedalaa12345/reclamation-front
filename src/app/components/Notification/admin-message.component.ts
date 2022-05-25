import { AnnonceService } from '../../services/annonce.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/model/notification';
import { NotificationService } from 'src/app/services/notification.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-statistic',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.scss']
})
export class AdminMessageComponent implements OnInit {
  

  ngOnInit() {
  }
  annonceClicked;
  closeResult;
  mode = 'list';

  pageOfItems: Array<any>;
  equipements?: Notification[];
  equipement: Notification = {
    id: 0,
    email: '',
    fonction: '',
    name:'',
    tel:'',
  
  }
  submitted ;
  constructor(private notificationService:NotificationService ,private modalService: NgbModal,private auth: AuthenticationService) {
    this.getAllEquipement();
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onCancel()
{
  this.mode='list';
}

  
  open(content,equipement) {
    this.annonceClicked=equipement;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  onAnnonceClick(a)
  {
    console.log(a);
  }

  getAllEquipement() {
    this.notificationService.getAll()
    .subscribe(
      data => {
        this.equipements = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  getAllEquipementByid(d) {
    this.notificationService.get(d)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  retrieveTutorials(): void {
    this.notificationService.getAll()
      .subscribe(
        data => {
          this.equipements = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
  

  onNewEquipement() {
    if (this.mode != 'new-equipement') {
      this.mode = 'new-equipement';
    } else {
      this.mode = 'list';
    }
  }
  onEditEquipement(){
    if (this.mode != 'edit-equipement') {
      this.mode = 'edit-equipement';
    } else {
      this.mode = 'list';6
    }

  }
  onSaveEquipement() {
    const data = {
    };
    this.notificationService.create(data)
      .subscribe(
        response => {
          this.getAllEquipement();
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
          this.submitted = false;
        });
   this.mode='list';
  }
  
  OnDeleteEquipement(d:number) {
    let c = confirm("Etes vous sûre ?");
    if (!c) return;
    console.log("Delete");
    this.notificationService.delete(d).
      subscribe(
        data => {
          this.getAllEquipement();
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
