import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCatalogoNavbarComponent } from './perfil-catalogo-navbar.component';

describe('PerfilCatalogoNavbarComponent', () => {
  let component: PerfilCatalogoNavbarComponent;
  let fixture: ComponentFixture<PerfilCatalogoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCatalogoNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCatalogoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
