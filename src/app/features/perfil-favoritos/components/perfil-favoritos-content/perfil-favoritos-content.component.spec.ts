import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFavoritosContentComponent } from './perfil-favoritos-content.component';

describe('PerfilFavoritosContentComponent', () => {
  let component: PerfilFavoritosContentComponent;
  let fixture: ComponentFixture<PerfilFavoritosContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFavoritosContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFavoritosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
