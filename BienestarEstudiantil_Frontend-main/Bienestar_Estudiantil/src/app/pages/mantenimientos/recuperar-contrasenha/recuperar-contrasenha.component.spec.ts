import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarContrasenhaComponent } from './recuperar-contrasenha.component';

describe('RecuperarContrasenhaComponent', () => {
  let component: RecuperarContrasenhaComponent;
  let fixture: ComponentFixture<RecuperarContrasenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarContrasenhaComponent]
    });
    fixture = TestBed.createComponent(RecuperarContrasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
