import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorUsuarioFiltroComponent } from './administrador-usuario-filtro.component';

describe('AdministradorUsuarioFiltroComponent', () => {
  let component: AdministradorUsuarioFiltroComponent;
  let fixture: ComponentFixture<AdministradorUsuarioFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorUsuarioFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorUsuarioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
