import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformativaPsicopedagogiaComponent } from './pagina-informativa-psicopedagogia.component';

describe('PaginaInformativaPsicopedagogiaComponent', () => {
  let component: PaginaInformativaPsicopedagogiaComponent;
  let fixture: ComponentFixture<PaginaInformativaPsicopedagogiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInformativaPsicopedagogiaComponent]
    });
    fixture = TestBed.createComponent(PaginaInformativaPsicopedagogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
