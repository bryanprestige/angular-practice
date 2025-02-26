import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from "./login-form/login-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-proyect';
  mensaje = 'Formulario de Login';
  list = [
    {
      id: 1,
      nombre: 'Articulo 1',
      precio: 101},
    {
      id: 2,
      nombre: 'Articulo 2',
      precio: 102},
    {
      id: 3,
      nombre: 'Articulo 3',
      precio: 103},
    {
      id: 4,
      nombre: 'Articulo 4',
      precio: 104}
  ]
}
