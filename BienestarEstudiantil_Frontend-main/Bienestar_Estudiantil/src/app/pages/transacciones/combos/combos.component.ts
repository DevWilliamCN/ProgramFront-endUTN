import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent implements OnInit {
  readonly BASE_URL = 'http://localhost:3000';

  provincias: Provincia[] = [];
  cantones: any[] = [];
  distritos: any[] = [];

  selectedProvincia: number | null = null;
  selectedCanton: number | null = null;
  selectedDistrito: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProvincias();
  }

  loadProvincias() {
    this.http.get<Provincia[]>(`${this.BASE_URL}/provincias`).subscribe(
      data => {
        this.provincias = data;
      },
      error => {
        console.error('Error al cargar provincias:', error);
      }
    );
  }

  onProvinciaChange() {
    console.log(`Provincia seleccionada: ${this.selectedProvincia}`); // Añadido para depuración
    this.http.get(`${this.BASE_URL}/provincias/${this.selectedProvincia}/cantones`).subscribe(
      data => {
        this.cantones = data as any[];
        console.log('Cantones recibidos:', this.cantones);  // Añadido para depuración
        this.selectedCanton = null;
        this.selectedDistrito = null;
        this.distritos = [];
      },
      error => {
        console.error('Error al cargar cantones:', error);
      }
    );
  }
  

  onCantonChange() {
    this.http.get(`${this.BASE_URL}/cantones/${this.selectedCanton}/distritos`).subscribe(
      data => {
        this.distritos = data as any[];
        this.selectedDistrito = null;
      },
      error => {
        console.error('Error al cargar distritos:', error);
      }
    );
  }
}
// provincias.model.ts
export interface Provincia {
  ProvinciaId: number;
  NombreProvincia: string;
}
