import { Component } from '@angular/core';
import { SomosComponent } from '../../components/somos/somos.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { DireccionComponent } from '../../components/direccion/direccion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SomosComponent, MenuComponent, DireccionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePage {

}
