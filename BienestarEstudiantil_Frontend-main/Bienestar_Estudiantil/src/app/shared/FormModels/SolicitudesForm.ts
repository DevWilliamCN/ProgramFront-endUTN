import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BitacoraForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      EstudianteId: ['', [Validators.required]],
      FechaHora: [
        formatDate(Date(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      Asunto: ['', [Validators.required]],
      ProfesionalId: ['', Validators.required],
      FormularioId: [0, Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      Estado: [true],
    });
  }
}
