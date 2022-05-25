import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Notification } from 'src/app/model/notification';
import { Reclamation } from 'src/app/model/reclamation';
import { TransportService } from 'src/app/services/transport.service';
import { Transport } from 'src/app/model/trasport';
import { Location } from 'src/app/model/location';
import { LocationService } from 'src/app/services/location.service';
import { SourceService } from 'src/app/services/source.service';
import { SourceTService } from 'src/app/services/source-t.service';
import { SourceT } from 'src/app/model/source-t';
import { Source } from 'src/app/model/source';
@Component({
  selector: 'app-admin-doctorants',
  templateUrl: './admin-doctorants.component.html',
  styleUrls: ['./admin-doctorants.component.scss']
})
export class AdminDoctorantsComponent implements OnInit {
  submitted=false;
  sourcest?: SourceT[];
  sourcet: SourceT = {
    id: 0,
    label: ''
  }
  sources?: Source[];
  source: Source = {
    id: 0,
    name: '',
    tel:'',
    agentTypeSource:''
  }
  locations?: Location[];
  location: Location = {
    id: 0,
    adress: '',
    coordgps: ''
   
  
  }
  notifications?: Notification[];
  notification: Notification = {
    id: 0,
    email: '',
    fonction: '',
    name:'',
    tel:''
  
  }

  mode = 'list';
  pageOfItems: Array<any>;
  reclamations?: Reclamation [];
  transports?: Transport [];
  reclamation: Reclamation ;
  cheminImage:any = "url";
  constructor(private sourcetService:SourceTService,private sourceService:SourceService,private locationService:LocationService,private transportService:TransportService,private notificationService:NotificationService,private reclamationService: ReclamationService,private auth: AuthenticationService) {
    this.getAllNotification();
    this.getAllrec();
    this.getAllTransport();
    this.getAllSourcet();

  }
  name = 'Dynamic Add Fields';
  values = [];
  

  removevalue(i){
    this.values.splice(i,1);
    this.mode = 'new-reclamation';
  }

  addvalue(){
    this.values.push({value: ""});
    this.mode = 'new-reclamation';
  }
  doctorants;
  ngOnInit() {

  }
  oneditRec(d)
  { 
    
    console.log(d);
    this.mode='edit-Reclamation';
  }
  onCancel()
  {
    this.mode='list';
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  getAllNotification() {
    this.notificationService.getAll()
    .subscribe(
      data => {
        this.notifications = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  getAllrec() {
    this.reclamationService.getAll()
    .subscribe(
      data => {
        this.reclamations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  onrec() {
    if (this.mode != 'notif-reclamation') {
      this.mode = 'notif-reclamation';
    } else {
      this.mode = 'list';
    }
  }
  onSaverec() {
    {
      const data = {
        id: this.reclamation.id,
        label: this.reclamation.dateTime,
        description : this.reclamation.description,
        agent: this.reclamation.agent,
        infosms: this.reclamation.infoSMS,
        location: this.reclamation.location,
        meansOfTransport: this.reclamation.meansOfTransport,
        sourceInfo: this.reclamation.sourceInfo
      };
      this.reclamationService.create(data)
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
  onNewReclamation() {
    if (this.mode != 'new-reclamation') {
      this.mode = 'new-reclamation';
    } else {
      this.mode = 'list';
    }
  }
  getAllSource() {
    this.sourceService.getAll()
      .subscribe(
        data => {
          this.sources = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  getAllSourcet() {
    this.sourcetService.getAll()
      .subscribe(
        data => {
          this.sourcest = data;
          console.log(data);
        },
        error => {
          console.log(error);
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
  onSaveLocation() {
    {
      const data = {
        id: this.location.id,
        adress: this.location.adress
      };
      this.locationService.create(data)
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
     onSaveSource() {
      {
        const data = {
          id: this.source.id,
          name: this.source.name,
          tel: this.source.tel,
          typeId:this.source.agentTypeSource
          
        };
        this.sourceService.create(data)
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

  OnDeleteRec(d) {
    let c = confirm("Etes vous sûre ?");
    if (!c) return;
    console.log("Delete");
    this.auth.deleteRessource(d._links.self.href).
      subscribe(
        data => {
          this.getAllrec();
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
