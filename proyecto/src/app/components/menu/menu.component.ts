import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

declare var bootstrap: any; // Sirve para controlar los modales de Bootstrap

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, ModalComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  // Req: Transportar datos desde un json y mostrar en una tabla
  public menu = { "categorias": [
    { "nombre": "Entradas", 
    "listado": [
      { "nombre": "Tartar de Atún", "precio": 185 },
      { "nombre": "Carpaccio de Res", "precio": 200 },
      { "nombre": "Sopa de Langosta", "precio": 220 }]
    },
    { "nombre": "Platos Fuertes",
    "listado": [
      { "nombre": "Filete Mignon", "precio": 380 },
      { "nombre": "Risotto de Langosta", "precio": 360 },
      { "nombre": "Salmón a la Parrilla", "precio": 320 }]
    },
    { "nombre": "Acompañamientos",
    "listado": [
      { "nombre": "Puré de Patatas Trufado", "precio": 100 },
      { "nombre": "Espárragos a la Mantequilla", "precio": 120 },
      { "nombre": "Ensalada César", "precio": 140 }]
    },
    { "nombre": "Postres",
    "listado": [
      { "nombre": "Soufflé de Chocolate", "precio": 160 },
      { "nombre": "Tarta de Limón", "precio": 180 },
      { "nombre": "Selección de Quesos", "precio": 200 }]
    },
    { "nombre": "Bebidas",
    "listado": [
      { "nombre": "Vino Tinto Reserva", "precio": 450 },
      { "nombre": "Champán Brut", "precio": 750 },
      { "nombre": "Cóctel de la Casa", "precio": 180 }]
    }]
  };

  // Buscar el modal y mostrarlo
  public verGaleria(): void {
    const modalElement = document.getElementById('galleryModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}