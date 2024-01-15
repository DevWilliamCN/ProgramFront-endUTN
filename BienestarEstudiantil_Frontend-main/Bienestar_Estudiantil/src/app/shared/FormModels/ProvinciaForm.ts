import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ProvinciaForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      ProvinciaId: [0, Validators.required],
      NombreProvincia: ['', Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      canton: [],
    });
  }
}
