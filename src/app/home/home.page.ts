import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ruta1 : string  = "../../assets/icon/1.jpg";
  width : number = 20;

  Categoria : string = "";
  constructor() {}

 
  
  
}
