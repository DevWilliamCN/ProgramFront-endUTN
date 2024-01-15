import { formatDate } from '@angular/common';
import { Injectable, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DistritoForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      SedeId: [0, Validators.required],
      NombreSede: ['', Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      distrito: [Type],
    });
  }
}
