import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class DistritoForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      DistritoId: [0, Validators.required],
      NombreDistrito: ['', Validators.required],
      CantonId: [0, Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
    });
  }
}
