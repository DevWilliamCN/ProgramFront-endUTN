import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class BitacoraForm {
  baseForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.baseForm = this.fb.group({
      Identificacion: ['', [Validators.required]],
      AyudaFamiliar: [Buffer, [Validators.required]],
      FechaIngreso: [
        formatDate(Date(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
      HojaDeSalud: [Buffer, [Validators.required]],
      DatosAcademicos: [Buffer, Validators.required],
      TituloBachilleratoMedio: [Buffer, Validators.required],
      UniversalUniqueIdentifier: ['', Validators.required],
      LastUser: ['', [Validators.required]],
      LastUpdate: [
        formatDate(Date.now(), 'yyyy-MM-dd', 'en'),
        [Validators.required],
      ],
    });
  }
}
