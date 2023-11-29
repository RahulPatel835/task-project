import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userData: any;
  constructor(private api:ApiService, private route:Router) {
    this.api.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  goToSearch(){
    this.route.navigate(['']);
  }
}
