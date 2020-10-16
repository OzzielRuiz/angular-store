import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // si el componente requiero solo una linea podemos hacer uso de template de la sig form
  // template: '<router-outlet></router-outlet>' en lugar de hacer uso de un archivo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
