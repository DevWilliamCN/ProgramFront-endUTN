import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasAtencionComponent } from './areas-atencion.component';

describe('AreasAtencionComponent', () => {
  let component: AreasAtencionComponent;
  let fixture: ComponentFixture<AreasAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasAtencionComponent]
    });
    fixture = TestBed.createComponent(AreasAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
