// visualizacion-rapida.component.ts
import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/shared/services/solicitudes.service';  // ajusta la ruta si es necesario
import { MatDialog } from '@angular/material/dialog';
import { Solicitud, SolicitudesComponent } from '../solicitudes/solicitudes.component';

@Component({
  selector: 'app-visualizacion-rapida',
  templateUrl: './visualizacion-rapida.component.html',
  styleUrls: ['./visualizacion-rapida.component.scss'],
})
export class VisualizacionRapidaComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  public codes: any[] = [
    { value: 'option1', viewValue: 'Opción 1' },
    { value: 'option2', viewValue: 'Opción 2' },
  ];
  
  constructor(private solicitudService: SolicitudesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchInitialSolicitudes();
  }

  fetchInitialSolicitudes() {
    this.solicitudService.getAllSolicitudes().subscribe(data => {
      this.solicitudes = data;
    });
  }

  openPopup(solicitud: Solicitud) {
    const dialogRef = this.dialog.open(SolicitudesComponent, {
      width: '800px',      
      data: { solicitud: solicitud }
    });
  }
}

