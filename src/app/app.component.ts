import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.http.get(this.url).subscribe((resp: any) => { console.log("1. ", resp.first_name) });
    this.http.get(this.url).subscribe((resp: any) => { console.log("2. ", resp.first_name) });
    this.http.get(this.url).subscribe((resp: any) => { console.log("3. ", resp.first_name) });
    this.http.get(this.url).subscribe((resp: any) => { console.log("4. ", resp.first_name) });
  }

}
