import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IProducto, IMotor, Inmobiliaria, ITecnologia } from 'src/app/interfaces';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre : string;
  descripcion : string;
  precio : number;
  tipo: string;
  km: number;
  año: number;
  m2: number;
  nºhab : number;
  localidad: string;
  ruta1 : string  = "../../assets/icon/1.jpg";
  width : number = 20;

  productos: (IProducto|IMotor|Inmobiliaria|ITecnologia)[] = [
{
  "id": 1,
  "nombre": "Lamborghini Huracán Performante",
  "descripcion": "Vehiculo deportivo de la legendaria escuderia italiana",
  "precio" : 350000.00,
  "km": 0,
  "año": 2018,
  "tipo": "c",
}, 
{

  "id": 2,
  "nombre": "IPhone 11 Pro 6GB 512GB",
  "descripcion": "Ultimo modelo de la marca Apple",
  "precio": 1299.00,

},

{
  "id": 3,
  "nombre": "Casa Gold Resort Golf and Spa",
  "descripción": "Casa de lujo a las afueras de california, más de 2,5km2 de vivienda",
  "precio": 1250000.00,
  "m2": 2500.00,
  "nºhab": 8,
  "localidad": "Santa Monica, California"
}

  ];


  Categoria : string = "";

  constructor(private _toastCtr: ToastController) { 

  } 

  async presentToast() {
    const toast = await this._toastCtr.create({
      message: 'Producto insertado correctamente',
      duration: 2000
    });
    toast.present();
  }

  async alertToast() {
    const toast = await this._toastCtr.create({
      message: 'Error al insertar producto',
      duration: 2000
    });
    toast.present();
  }

  insertar(){

    if(this.Categoria == "motor") {

      if(this.nombre == "" || this.precio == null || this.descripcion == "" || this.tipo == "" 
      || this.km == null || this.año == null ) {
        
        this.alertToast();
      } else {

        let motor : IMotor = {
          "id": this.productos.length +1,
          "nombre":this.nombre,
          "precio": this.precio,
          "descripcion":this.descripcion,
          "tipo": this.tipo,
          "km": this.km,
          "año": this.año
        };

        this.presentToast();
        this.productos.push(motor);

        console.log("Producto: " + this.nombre + "Introducido correctamente");
        console.log(this.productos);
      }

    } else if(this.Categoria == "inmo") {

      if(this.nombre =="" || this.descripcion == "" || this.precio == null || this.m2 == null  || this.nºhab == null ||  this.localidad == "") {
        
        this.alertToast();
      } else {
        let inmobiliaria : Inmobiliaria ={
          "id": this.productos.length +1,
          "nombre": this.nombre,
          "precio": this.precio,
          "m2": this.m2,
          "nºhab": this.nºhab,
          "localidad": this.localidad
        };
        this.productos.push(inmobiliaria);
        this.presentToast();
        //this.id++;
        console.log("Producto: " + this.nombre + " introducido con éxito dentro de la categoría inmobiliaria");
        console.log(this.productos);
  
      }
    } else if(this.Categoria == "tecno") {

      if(this.nombre == "" || this.precio == null || this.descripcion == "") {
        
        this.alertToast();
      } else {
        let tecnologia: ITecnologia={
          "id":this.productos.length +1,
          "nombre":this.nombre,
          "precio": this.precio,
          "descripcion":this.descripcion,
       
        };
        this.productos.push(tecnologia);
        this.presentToast();
        //this.id++;
        console.log("Producto: " + this.nombre + " introducido con éxito dentro de la categoría tecnología");
        console.log(this.productos);

      }

    } else if(this.Categoria == "hogar"){

      if(this.nombre == "" || this.precio == null || this.descripcion == "") {
        this.alertToast();
      } else {
        let hogar: IProducto = {
          "id":this.productos.length +1,
          "nombre":this.nombre,
          "precio": this.precio,
          "descripcion":this.descripcion,
        }
  
        this.productos.push(hogar);
        this.presentToast();
        //this.id++;
        console.log("Producto: " + this.nombre + " introducido con éxito dentro de la categoría hogar" + this.productos + " " + this.id + " " + this.precio);
        console.log(this.productos);

      }
      
    }

  }
  
  
}
