import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCitaComponent } from './admin-cita.component';

describe('AdminCitaComponent', () => {
  let component: AdminCitaComponent;
  let fixture: ComponentFixture<AdminCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCitaComponent]
    });
    fixture = TestBed.createComponent(AdminCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
