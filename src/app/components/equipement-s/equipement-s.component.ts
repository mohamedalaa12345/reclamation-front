import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Equipement } from 'src/app/model/equipement';
import { EquipementT } from 'src/app/model/equipement-t';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EquipementService } from 'src/app/services/equipement.service';
import { EquipementtService } from 'src/app/services/equipementt.service';

@Component({
  selector: 'app-equipement-s',
  templateUrl: './equipement-s.component.html',
  styleUrls: ['./equipement-s.component.scss']
})
export class EquipementSComponent implements OnInit {

  

  ngOnInit() {
  }
  annonceClicked;
  closeResult;
  mode = 'list';
  equipementst?: EquipementT[];
  detailleE?: EquipementT[];
  equipemenntt: EquipementT = {
    id: 0,
    label: ''
    
  };
  pageOfItems: Array<any>;
  equipements?: Equipement[];
  equipement: Equipement = {
    id: 0,
    ref: '',
    emplacement: '',
    dateEntretien:"",
    adress:'',
    equipmentType: {
      id: 0,
      label: ''
  }
  
  }

  currentEquipement : Equipement = {
    id: 0,
    ref: '',
    emplacement: '',
    dateEntretien:"",
    adress:'',
    equipmentType: {
      id: 0,
      label: ''
  }
  };
  currentIndex = -1;
  code = '';
  label = '';
  submitted ;
  constructor(private equipementtService:EquipementtService,private equipementService:EquipementService ,private modalService: NgbModal,private auth: AuthenticationService) {
    this.getAllEquipement();
    this.getAllEquipementt();
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
    this.equipementService.getAll()
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
    this.equipementService.get(d)
    .subscribe(
      data => {
        this.detailleE = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  retrieveTutorials(): void {
    this.equipementService.getAll()
      .subscribe(
        data => {
          this.equipements = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    //this.currentEquipement =  {};
    this.retrieveTutorials();
    this.currentIndex = -1;
  }
  setActiveTutorial(equipement: Equipement, index: number): void {
    this.currentEquipement = equipement;
    this.currentIndex = index;
  }
  getAllEquipementt() {
    this.equipementtService.getAll()
    .subscribe(
      data => {
        this.equipementst = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  detaille(d){
    this.equipementService.get(d)
    .subscribe(
      data => {
        this.detailleE = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    if (this.mode != 'detaille') {
      this.mode = 'detaille';
    } else {
      this.mode = 'list';
    }
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
      ref: this.equipement.ref,
      emplacement: this.equipement.emplacement,
      dateEntretien: this.equipement.dateEntretien,
      adress: this.equipement.adress,
      typeId: this.equipement.equipmentType
    };
    this.equipementService.create(data)
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
    this.equipementService.delete(d).
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
      return this.auth.isUser();
  }
}
