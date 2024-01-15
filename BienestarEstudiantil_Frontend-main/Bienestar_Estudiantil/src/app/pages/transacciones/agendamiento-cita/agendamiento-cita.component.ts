// agendamiento-cita.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CombosComponent } from '../combos/combos.component';  // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-agendamiento-cita',
  templateUrl: './agendamiento-cita.component.html',
  styleUrls: ['./agendamiento-cita.component.scss'],
})
export class AgendamientoCitaComponent {

  selected: Date | null | undefined;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CombosComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }
}
