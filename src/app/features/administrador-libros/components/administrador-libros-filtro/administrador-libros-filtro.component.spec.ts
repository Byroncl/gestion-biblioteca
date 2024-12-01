import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLibrosFiltroComponent } from './administrador-libros-filtro.component';

describe('AdministradorLibrosFiltroComponent', () => {
  let component: AdministradorLibrosFiltroComponent;
  let fixture: ComponentFixture<AdministradorLibrosFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorLibrosFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorLibrosFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
