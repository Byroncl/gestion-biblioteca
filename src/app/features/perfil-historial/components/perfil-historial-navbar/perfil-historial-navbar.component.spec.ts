import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHistorialNavbarComponent } from './perfil-historial-navbar.component';

describe('PerfilHistorialNavbarComponent', () => {
  let component: PerfilHistorialNavbarComponent;
  let fixture: ComponentFixture<PerfilHistorialNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilHistorialNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilHistorialNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
