import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  constructor(userservice : UserService ,private modalService: NgbModal,private httpClient: HttpClient) { }
  
  ngOnInit() {
  }
  public host = 'http://localhost:8080';
  register(user): Observable<any> {
    return this.httpClient.post(this.host + '/api/auth', {
      username: user.username,
      email: user.email,
      password: user.password
    }, );
  }
}
