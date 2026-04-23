import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FichaEstudiante } from './ficha-estudiante/ficha-estudiante'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichaEstudiante],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}