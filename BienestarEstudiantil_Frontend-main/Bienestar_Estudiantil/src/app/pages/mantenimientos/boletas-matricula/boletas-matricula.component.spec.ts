import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletasMatriculaComponent } from './boletas-matricula.component';

describe('BoletasMatriculaComponent', () => {
  let component: BoletasMatriculaComponent;
  let fixture: ComponentFixture<BoletasMatriculaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletasMatriculaComponent]
    });
    fixture = TestBed.createComponent(BoletasMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
