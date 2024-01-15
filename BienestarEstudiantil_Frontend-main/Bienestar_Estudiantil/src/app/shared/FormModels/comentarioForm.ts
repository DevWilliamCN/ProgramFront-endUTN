import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ComentariosForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      ComentariosId: ['', [Validators.required]],
      CitaId: ['', [Validators.required]],
      Comentario: ['', [Validators.required, Validators.minLength(5)]],
      precio: [0, [Validators.required]],
      UniversalUniqueIdentifier: ['', [Validators.required]],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
    });
  }
}
