import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [NgFor, ModalComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.css'
})
export class MotosComponent {
  public json = {
    "motos": [
      {
        "id": 1,
        "marca": "Honda",
        "modelo": "CBR 1000RR",
        "cilindrada": 1000,
        "potencia": 200,
        "precio": 15000
      },
      {
        "id": 2,
        "marca": "Yamaha",
        "modelo": "R1",
        "cilindrada": 1000,
        "potencia": 200,
        "precio": 15000
      },
      {
        "id": 3,
        "marca": "Kawasaki",
        "modelo": "Ninja ZX-10R",
        "cilindrada": 1000,
        "potencia": 200,
        "precio": 15000
      },
      {
        "id": 4,
        "marca": "Suzuki",
        "modelo": "GSX-R1000",
        "cilindrada": 1000,
        "potencia": 200,
        "precio": 15000
      },
      {
        "id": 5,
        "marca": "Ducati",
        "modelo": "Panigale V4",
        "cilindrada": 1100,
        "potencia": 220,
        "precio": 20000
      }
    ]
  }

  public verMoto(moto: {id: number, marca: string, modelo: string, cilindrada: number, potencia: number, precio: number}): void {
    //Cambiar contenido del modal
    const modalBody = document.getElementById("ModalBody");
    if(modalBody){
      modalBody.innerHTML = `
      <div class="row">
        <div class="col-4">
          <h3>Caracteristicas: </h3>
          <p>Marca: ${moto.marca}</p>
          <p>Modelo: ${moto.modelo}</p>
          <p>Cilindrada: ${moto.cilindrada} cc</p>
          <p>Potencia: ${moto.potencia} hp</p>
          <p>Precio: $${moto.precio}</p>
        </div>
        <div class="col">
          <img src="assets/motos/moto${moto.id}.jpg" class="img-fluid" alt="Foto de ${moto.marca} ${moto.modelo}">
        </div>
      </div>
      `;
    }
  }
}
