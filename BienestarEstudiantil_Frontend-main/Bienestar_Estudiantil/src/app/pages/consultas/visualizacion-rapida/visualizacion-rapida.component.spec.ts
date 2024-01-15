import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionRapidaComponent } from './visualizacion-rapida.component';

describe('VisualizacionRapidaComponent', () => {
  let component: VisualizacionRapidaComponent;
  let fixture: ComponentFixture<VisualizacionRapidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizacionRapidaComponent]
    });
    fixture = TestBed.createComponent(VisualizacionRapidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
