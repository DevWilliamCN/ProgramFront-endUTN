import { Component } from '@angular/core';
import { ExportService } from 'src/app/shared/services/export.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.scss'],
})
export class ListaEstudiantesComponent {
  displayedColumns: string[] = ['Imagen', 'nombre', 'Correo', 'acciones'];

  dataSource = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private mensajeria: ToastrService,
    private srvExport: ExportService
  ) {}

  exportarHtml() {
    try {
      const page = document.querySelector('table') as HTMLElement;
      this.srvExport.imprimirHTML(page, 'tablaEstudiantes');
    } catch (error) {}
  }
  exportar() {
    const datos = this.dataSource.data.map((est: any) => {
      const row = [est.Imagen, est.nombre, est.Correo];
      return row;
    });

    this.srvExport.imprimir(
      this.displayedColumns,
      datos,
      'Lista de Estudiantes Por Profesor',
      true,
      'Estudiantes'
    );
  }
}
