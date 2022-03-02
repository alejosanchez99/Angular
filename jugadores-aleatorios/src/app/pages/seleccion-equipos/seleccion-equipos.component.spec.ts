import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionEquiposComponent } from './seleccion-equipos.component';

describe('SeleccionEquiposComponent', () => {
  let component: SeleccionEquiposComponent;
  let fixture: ComponentFixture<SeleccionEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
