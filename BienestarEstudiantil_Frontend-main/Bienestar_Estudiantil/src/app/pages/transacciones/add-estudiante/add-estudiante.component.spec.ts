import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstudianteComponent } from './add-estudiante.component';

describe('AddEstudianteComponent', () => {
  let component: AddEstudianteComponent;
  let fixture: ComponentFixture<AddEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEstudianteComponent]
    });
    fixture = TestBed.createComponent(AddEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
