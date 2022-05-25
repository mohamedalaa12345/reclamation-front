import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transport } from 'src/app/model/trasport';
import { TransportT } from 'src/app/model/trasport-t';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransportTService } from 'src/app/services/transport-t.service';

import { TransportService } from 'src/app/services/transport.service';
@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {


  annonceClicked;
  closeResult;
  mode = 'list';
  pageOfItems: Array<any>;
  transportst?: TransportT[];
  transportt: TransportT = {
    id: 0,
    label: ''

  };
  transports?: Transport[];
  transport: Transport = {
    id: '',
    number: '',
    marque: '',
    meansOfTransportType: {
      id: 0,
      label: ''
    }
  };
  currentTutorial: Transport = {

    id: '',
    number: '',
    marque: '',
    meansOfTransportType: {
      id: 0,
      label: ''
    }
  };
  currentIndex = -1;
  message = '';
  number: '';
  marque: '';
  type: '';
  submitted = false;
 
  
  constructor(private modalService: NgbModal, private auth: AuthenticationService, private transportService: TransportService, private transporttService: TransportTService) {
    //this.getAllTransport();
    
    
  }
  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  onCancel() {
    this.mode = 'list';
  }

  onSaveTransport() {
    {
      const data = {
        number: this.transport.number,
        marque: this.transport.marque,
        typeId: this.transport.meansOfTransportType
      };
      this.transportService.create(data)
        .subscribe(
          
          response => {
            console.log(response);
            this.submitted = true;
            this.getAllTransport();
          },
          error => {
            console.log(error);
          });

    } this.mode = 'list';
  }
  @ViewChild('alert', { static: true }) alert: ElementRef;
  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  ngOnInit() {
    this.retrieveTutorials();
    this.getAllTransportt();
  }
  open(content, transportt) {
    this.annonceClicked = transportt;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  getAllTransport() {
    this.transportService.getAll()
      .subscribe(
        data => {
          this.transports = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  getAllTransportt() {
    this.transporttService.getAll()
      .subscribe(
        data => {
          this.transportst = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  retrieveTutorials(): void {
    this.transportService.getAll()
      .subscribe(
        data => {
          this.transports = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.currentTutorial = {};
    this.retrieveTutorials();
    this.currentIndex = -1;
  }
  setActiveTutorial(transport: Transport, index: number): void {
    this.currentTutorial = transport;
    this.currentIndex = index;
  }


  onNewTransport() {
    if (this.mode != 'new-transport') {
      this.mode = 'new-transport';
    } else {
      this.mode = 'list';
    }
  }


  onEditTransport(a:Transport,b:number) {
    this.message = '';
    this.transportService.update(a, b)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  detaille() {
    if (this.mode != 'detaille') {
      this.mode = 'detaille';
    } else {
      this.mode = 'list';
    }
  }

  isAdmin() {
    return this.auth.isAdmin();
  }

  isUser() {
    return this.auth.isUser();
  }
  
  OnDeleteTransport(d: number) {
    let c = confirm("Etes vous sûre ?");
    if (!c) return;
    console.log("Delete");
    this.transportService.delete(d).
      subscribe(
        data => {
          this.getAllTransport();
        },
        err => { console.log(err); }
      )
  }

}





