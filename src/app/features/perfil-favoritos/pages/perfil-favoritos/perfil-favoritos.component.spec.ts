import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFavoritosComponent } from './perfil-favoritos.component';

describe('PerfilFavoritosComponent', () => {
  let component: PerfilFavoritosComponent;
  let fixture: ComponentFixture<PerfilFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
