import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInformativaOrientacionEstudiantilComponent } from './pagina-informativa-orientacion-estudiantil.component';

describe('PaginaInformativaOrientacionEstudiantilComponent', () => {
  let component: PaginaInformativaOrientacionEstudiantilComponent;
  let fixture: ComponentFixture<PaginaInformativaOrientacionEstudiantilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInformativaOrientacionEstudiantilComponent]
    });
    fixture = TestBed.createComponent(PaginaInformativaOrientacionEstudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
