import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Repos } from '../navbar/publicRepos';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
})
export class RepositoryComponent {
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


  constructor(private api: ApiService) {
    this.api.getRepo().subscribe(
      (user) => {
        this.publicRepos = user
        this.myObject = user;


      },
      (error) => {
        console.log("User not found");
      }
    );
  }

}


