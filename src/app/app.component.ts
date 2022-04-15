import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


 ngOnInit(): void {
   this.observable$.subscribe(this.observer);
 }

 observable$=new Observable((subscriber)=>{
   console.log("observable executed")
   subscriber.next("Suman");
   subscriber.next("pujan");
 })
 observer={
   next:(value:any)=>{console.log(value);}
 }
}
