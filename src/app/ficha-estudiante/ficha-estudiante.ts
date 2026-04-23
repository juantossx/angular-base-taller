import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha-estudiante',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ficha-estudiante.html',
  styleUrl: './ficha-estudiante.css'
})
export class FichaEstudiante {

  // Variables (Two-Way Binding)
  nombre: string = '';
  codigo: number | null = null;
  programa: string = '';
  semestre: number = 1;
  correo: string = '';
  tieneBeca: boolean = false;
  colorFavorito: string = '#ffffff';

  // Signals
  contadorGuardados = signal(0);
  estado = signal('Sin guardar');

  // Lógica adicional
  get mensajeSemestre(): string {
    if (this.semestre <= 3) return 'Estás comenzando ';
    if (this.semestre <= 6) return 'Vas por buen camino ';
    return 'Estás en la recta final ';
  }

  correoValido(): boolean {
    return this.correo.endsWith('@unipaz.edu.co');
  }

  // Event Binding
  guardar(): void {
    console.log({
      nombre: this.nombre,
      codigo: this.codigo,
      programa: this.programa,
      semestre: this.semestre,
      correo: this.correo,
      tieneBeca: this.tieneBeca,
      colorFavorito: this.colorFavorito
    });

    alert('Datos guardados correctamente');

    this.contadorGuardados.update(v => v + 1);
    this.estado.set('Guardado ✓');
  }

  limpiar(): void {
    this.nombre = '';
    this.codigo = null;
    this.programa = '';
    this.semestre = 1;
    this.correo = '';
    this.tieneBeca = false;
    this.colorFavorito = '#ffffff';

    this.estado.set('Sin guardar');
  }
  colorTexto(): string {
    const color = this.colorFavorito.replace('#', '');
  
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
  
    // Fórmula de luminancia
    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b);
  
    return luminancia > 150 ? '#000000' : '#ffffff';
  }
}