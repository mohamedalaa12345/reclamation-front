import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Station } from 'src/app/model/station';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {
  
  annonceClicked;
  closeResult;
  mode = 'list';
  pageOfItems: Array<any>;
  stations?: Station[];
  station: Station = {
    id: '',
    code: '',
    label: ''
  };
  
  code = '';
  label = '';
  submitted = false;
  constructor(private modalService: NgbModal,private stationService:StationService ,private auth: AuthenticationService) {
   
  
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
onCancel()
{
  this.mode='list';
}

onSaveStation() {
  {
    const data = {
      code: this.station.code,
      label: this.station.label
    };
    this.stationService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  } this.mode='list';
   }

  ngOnInit() {
    this.retrieveTutorials();
  }
  open(content,station) {
    this.annonceClicked=station;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  getAllStation() {
    this.stationService.getAll()
    .subscribe(
      data => {
        this.stations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
   }
  
  
  retrieveTutorials(): void {
    this.stationService.getAll()
      .subscribe(
        data => {
          this.stations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  
 
  onNewStation() {
    if (this.mode != 'new-station') {
      this.mode = 'new-station';
    } else {
      this.mode = 'list';
    }
  }
  detaille(){
    if (this.mode != 'detaille') {
      this.mode = 'detaille';
    } else {
      this.mode = 'list';
    }
  }
 
  onEditStation(){
    if (this.mode != 'edit-station') {
      this.mode = 'edit-station';
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
  
  OnDeleteStation(d) {
    let c = confirm("Etes vous sûre ?");
    if (!c) return;
    console.log("Delete");
    this.stationService.delete(d).
      subscribe(
        data => {
          this.getAllStation();
        },
        err => { console.log(err); }
      )
  }

}
