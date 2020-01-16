import { Injectable } from '@angular/core';
import { IProducto, IMotor, Inmobiliaria, ITecnologia } from 'src/app/interfaces';

@Injectable()

export class ProductoService {

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
          "descripcion": "Casa de lujo a las afueras de california, más de 2,5km2 de vivienda",
          "precio": 1250000.00,
          "m2": 2500.00,
          "nºhab": 8,
          "localidad": "Santa Monica, California"
        }
        
          ];


    getProducto() : IProducto[]{
    return this.productos;
    }

    getProduct(id: number) : IProducto {
        return this.productos.find(x => x.id == id);

    }

}