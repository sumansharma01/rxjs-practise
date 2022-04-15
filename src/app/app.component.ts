import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  url = "https://random-data-api.com/api/name/random_name";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    of("Suman","Pujan").subscribe(resp=>console.log(resp));
  }

}
