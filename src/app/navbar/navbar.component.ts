import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Repos } from './publicRepos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private api: ApiService, private route: Router) {}
  public loading:boolean = false;
  inputData: string = '';
  myObject: any = {};
  publicRepos:any;
  p:any;
  language: any;
  repositoryLanguages: any[] = [];
  githubUsername: string = this.api.Username;
  publicRepo: Repos[] = [];
  limitRecord: number = 10;
  skipRecord: number = 0;
  tempPublicRepos: any;
  repos: Repos = new Repos();
  userData: any;
  
  onClick() {
    this.loading = true;
    this.api.searchData = this.inputData;
    this.api.getUser(this.inputData).subscribe(
      (user) => {
        console.log(user)
        this.api.setUserData(user);
        this.route.navigate(['/repo-list']);
        this.loading = false;
      },
      (error) => {
        console.log("User not found",error);
        this.loading = true;
      }
    );
    this.api.getRepo().subscribe(
      (user) => {
        console.log("this is repo",user)
        this.publicRepos = user
        this.myObject = user;
      },
      (error) => {
        console.log("User not found");
      }
    );
    this.api.userData$.subscribe((data) => {
      this.userData = data;
    });
  }
}

