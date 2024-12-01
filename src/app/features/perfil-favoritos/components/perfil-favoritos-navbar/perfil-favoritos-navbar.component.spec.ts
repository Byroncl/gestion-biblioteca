import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFavoritosNavbarComponent } from './perfil-favoritos-navbar.component';

describe('PerfilFavoritosNavbarComponent', () => {
  let component: PerfilFavoritosNavbarComponent;
  let fixture: ComponentFixture<PerfilFavoritosNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFavoritosNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFavoritosNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
