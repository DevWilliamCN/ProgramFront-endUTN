import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamientoCitaComponent } from './agendamiento-cita.component';

describe('AgendamientoCitaComponent', () => {
  let component: AgendamientoCitaComponent;
  let fixture: ComponentFixture<AgendamientoCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamientoCitaComponent]
    });
    fixture = TestBed.createComponent(AgendamientoCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
