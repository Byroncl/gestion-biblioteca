import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLibrosSidebarComponent } from './administrador-libros-sidebar.component';

describe('AdministradorLibrosSidebarComponent', () => {
  let component: AdministradorLibrosSidebarComponent;
  let fixture: ComponentFixture<AdministradorLibrosSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorLibrosSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorLibrosSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
