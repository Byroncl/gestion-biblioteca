import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecomendacionesNavbarComponent } from './perfil-recomendaciones-navbar.component';

describe('PerfilRecomendacionesNavbarComponent', () => {
  let component: PerfilRecomendacionesNavbarComponent;
  let fixture: ComponentFixture<PerfilRecomendacionesNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilRecomendacionesNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilRecomendacionesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
