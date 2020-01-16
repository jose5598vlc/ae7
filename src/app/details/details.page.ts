import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../src/app/services/src/app/services/src/app/services/productos.services';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: number;

  constructor(private _activatedRoute : ActivatedRoute, private _productoService : ProductoService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    console.log("he recibido un "+this.id);
    let res = this._productoService.getProduct(this.id);
    console.log("el nombre es" +res.nombre);
  }

}
