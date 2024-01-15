import { ChangeDetectorRef, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdminCitaComponent } from './admin-cita/admin-cita.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosService } from 'src/app/shared/services/comentarios.service';
import { Comentario } from 'src/app/shared/Models/comentario';
interface Codes {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-atencion-cita',
  templateUrl: './atencion-cita.component.html',
  styleUrls: ['./atencion-cita.component.scss'],
})
export class AtencionCitaComponent {
  titulo = 'Crear Producto';
  isCreate = true;

  codes: Codes[] = [
    { value: 'item-0', viewValue: 'Solicitudes' },
    { value: 'item-1', viewValue: 'Citas' },
  ];

  displayedColumns: string[] = [
    'ComentarioId',
    'CitaId',
    'Comentario',
    'UniversalUniqueIdentifier',
    'LastUser',
    'LastUpdate',
  ];

  dataSource = new MatTableDataSource();
  licenciasSeleccionadas: Comentario[] = []; // Array para almacenar las licencias seleccionadas

  constructor(
    private srvComentarios: ComentariosService,
    public dialog: MatDialog,
    private mensajeria: ToastrService,
    private cdr: ChangeDetectorRef
  ) {}

  abrirDialog(comentario?: Comentario): void {
    const dialogRef = this.dialog.open(AdminCitaComponent, {
      width: '500px',
      height: '500px',
      data: { comentario },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // Agregar el comentario cerrado a la tabla
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription(); // Actualizar cambios en la tabla
        this.mensajeria.success('SE GUARDO CORRECTAMENTE');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarComentario(comentario: Comentario): void {
    const index = this.dataSource.data.indexOf(comentario);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1); // Elimina el comentario del array
      this.dataSource._updateChangeSubscription(); // Actualiza cambios en la fuente de datos
      this.mensajeria.success('SE HA ELIMINADO EXITOSAMENTE');
    }
  }
}
