import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api: ApiService, private route: Router) {}
  public loading:boolean = false;
  inputData: string = '';

  onClick() {
    this.loading = true
    this.api.getUser(this.inputData).subscribe(
      (user) => {
        this.api.setUserData(user);
        this.route.navigate(['/repo-list']);
        this.loading = false;
      },
      (error) => {
        console.log("User not found");
        this.loading = true;
      }
    );
  }
}
