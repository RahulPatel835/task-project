import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private apiService: ApiService) {}
 
  ngOnInit() {
    // this.apiService.getUser(this.apiService.searchData).subscribe(console.log);
  }
}
