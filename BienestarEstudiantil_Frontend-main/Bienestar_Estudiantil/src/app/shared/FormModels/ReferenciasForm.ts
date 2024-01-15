import { formatDate } from '@angular/common';
import { Injectable, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ReferenciaForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      RefereciaId: [0, Validators.required],
      Entidad: ['', Validators.required],
      AreaReferente: ['', Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      Evaluacion: [Type],
    });
  }
}
