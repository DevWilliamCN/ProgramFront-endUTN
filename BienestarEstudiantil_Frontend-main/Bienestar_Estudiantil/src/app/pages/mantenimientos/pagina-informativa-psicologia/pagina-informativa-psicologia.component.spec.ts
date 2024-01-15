import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformativaPsicologiaComponent } from './pagina-informativa-psicologia.component';

describe('PaginaInformativaPsicologiaComponent', () => {
  let component: PaginaInformativaPsicologiaComponent;
  let fixture: ComponentFixture<PaginaInformativaPsicologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInformativaPsicologiaComponent]
    });
    fixture = TestBed.createComponent(PaginaInformativaPsicologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
