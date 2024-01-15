import { formatDate } from '@angular/common';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ComentariosForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      ComentarioId: [0, Validators.required],
      Comentario: ['', Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      Cita: [Type, Validators.required],
    });
  }
}
