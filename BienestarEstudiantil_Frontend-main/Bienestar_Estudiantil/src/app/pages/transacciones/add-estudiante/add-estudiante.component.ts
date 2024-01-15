import { Component } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html',
  styleUrls: ['./add-estudiante.component.scss']
})
export class AddEstudianteComponent {
  date = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void { }
  chosenYearHandler(normalizedYear: Date, datepicker: MatDatepicker<Date>) {
    const ctrlValue = new Date(normalizedYear);
    ctrlValue.setFullYear(normalizedYear.getFullYear());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  get displayedYear(): string {
  if (this.date.value) {
    return `${this.date.value.getFullYear()}`;
  }
  return '';
}

}
