import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
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
    // from converts other form of data to observables
    //array to observable
    from(["Suman", "Pujan"]).subscribe(resp => console.log(resp));
  }

}
