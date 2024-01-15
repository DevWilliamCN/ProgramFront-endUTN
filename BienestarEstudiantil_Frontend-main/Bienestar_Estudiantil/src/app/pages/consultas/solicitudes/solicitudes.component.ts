// solicitudes.component.ts
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolicitudesService } from 'src/app/shared/services/solicitudes.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  selectedSolicitud: any;
  public solicitudes: Solicitud[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private solicitudesService: SolicitudesService
  ) {
    if (data && data.solicitud) {
      this.selectedSolicitud = data.solicitud;
    }
  }
  ngOnInit(): void {
    this.solicitudesService.getAllSolicitudes().subscribe(data => {
      this.solicitudes = data;
      
    });
  }

  downloadPDF() {
    const pdf = new jsPDF();
    
    const title = "Detalles de la Solicitud";
    const asunto = `Asunto de solicitud: ${this.selectedSolicitud?.Asunto}`;
    const estudianteID = `Estudiante ID: ${this.selectedSolicitud?.estudiante?.Identificacion}`;
    const fechaHora = `Fecha y Hora: ${this.selectedSolicitud?.FechaHora}`;
    
    const profesionalID = `Identificación del Profesional: ${this.selectedSolicitud?.profesional?.Identificacion}`;
    
    const estudianteDetails = `ID Estudiante: ${this.selectedSolicitud?.estudiante?.EstudianteId}
  Identificación del Estudiante: ${this.selectedSolicitud?.estudiante?.Identificacion}
  Ayuda Familiar: ${this.selectedSolicitud?.estudiante?.AyudaFamiliar}
  Estado de Trabajo: ${this.selectedSolicitud?.estudiante?.EstadoTrabajo ? 'Sí' : 'No'}`;
  
    pdf.setFontSize(22);
    pdf.text(title, 10, 10);
    
    pdf.setFontSize(12);
    pdf.text(asunto, 10, 30);
    pdf.text(estudianteID, 10, 40);
    pdf.text(fechaHora, 10, 50);
    
    pdf.text('Profesional', 10, 70);
    pdf.text(profesionalID, 10, 80);
    
    pdf.text('Estudiante', 10, 100);
    
    // Aquí, dividimos el texto del estudiante en varias líneas para que se ajuste al PDF.
    const lines = pdf.splitTextToSize(estudianteDetails, 180);
    pdf.text(lines, 10, 110);
  
    pdf.save('Solicitud.pdf');
  }
  
  
  printContent(): void {
  let printContents = document.getElementById('printableArea')?.innerHTML;
  let originalContents = document.body.innerHTML;

  if (printContents) {
    document.body.innerHTML = printContents;
    window.print();
    setTimeout(() => {
      document.body.innerHTML = originalContents;
    }, 0);
  }
  
}

}

// Definición de la interfaz
export interface Profesional {
  ProfesionalId: number;
  Identificacion: string;
}

export interface Estudiante {
  EstudianteId: number;
  Identificacion: string;
  AyudaFamiliar: string;
  EstadoTrabajo: boolean;
}

export interface Solicitud {
  Asunto:string;
  SolicitudId: number;
  EstudianteId: string;
  FechaHora: string;
  profesional: Profesional;
  estudiante: Estudiante;
}
