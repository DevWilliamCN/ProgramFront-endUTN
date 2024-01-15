import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ComentariosForm } from 'src/app/shared/FormModels/comentarioForm';
import { ComentariosService } from 'src/app/shared/services/comentarios.service';

@Component({
  selector: 'app-admin-cita',
  templateUrl: './admin-cita.component.html',
  styleUrls: ['./admin-cita.component.scss'],
})
export class AdminCitaComponent {
  dataSource = new MatTableDataSource();

  formulario: FormGroup; // Declarar un FormGroup para contener los campos del formulario

  constructor(
    private srvComentarios: ComentariosService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AdminCitaComponent>, // Importa MatDialogRef y agrega esto
    @Inject(MAT_DIALOG_DATA) public data: { comentario: any },
    private mensajeria: ToastrService,
    public comentarioForm: ComentariosForm,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      comentarioId: [''], // Puedes proporcionar un valor predeterminado si es necesario
      comentario: [''],
    });
  }

  agregarComentario() {
    const comentarioId = this.formulario.get('comentarioId')?.value;
    const comentario = this.formulario.get('comentario')?.value;
    this.dialogRef.close({ comentarioId, comentario });

    // Aquí puedes hacer lo que necesites con los valores capturados, como guardarlos en una variable
  }
}
