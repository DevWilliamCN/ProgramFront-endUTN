import { Component } from '@angular/core';
import { ExportService } from 'src/app/shared/services/export.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent {
  displayedColumns: string[] = ['Imagen', 'nombre', 'Correo', 'acciones'];

  dataSource = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
    private mensajeria: ToastrService,
    private srvExport: ExportService
  ) {}

  exportarHtml() {
    try {
      const page = document.querySelector('formulario') as HTMLElement;
      this.srvExport.imprimirHTML(page, 'formulariosEstudiantil');
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
      'Formulario rellenado por el Estudiante',
      true,
      'Formularios'
    );
  }
}
