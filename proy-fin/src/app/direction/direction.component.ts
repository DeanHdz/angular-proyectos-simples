import { Component } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-direction',
  standalone: true,
  imports: [MapaComponent, FooterComponent, HeaderComponent],
  templateUrl: './direction.component.html',
  styleUrl: './direction.component.css'
})
export class DirectionComponent {

}
