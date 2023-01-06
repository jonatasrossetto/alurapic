import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PhotoService } from './photos/photo/photo.service';
import { PhotoInterface } from './photos/photo/photo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title='Alurapic';
  photos:PhotoInterface[]=[];
  
  constructor(private photoService:PhotoService){  }

  
  ngOnInit():void{
    this.photoService.listFromUser('users')
    .subscribe(res => {
           console.log(res);
           this.photos = res;
         });
  }
  

}
