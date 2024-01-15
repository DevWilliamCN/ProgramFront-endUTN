import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Type } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class EvaluacionForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      DistritoId: [0, Validators.required],
      NombreDistrito: ['', Validators.required],
      Resultado: ['', Validators.required],
      AreaReferida: [false],
      EntidadReferente: [false],
      Padecimientos: ['', Validators.required],
      Adecuaciones: ['', Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      cita: [Type],
    });
  }
}
