import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorReportesSidebarComponent } from './administrador-reportes-sidebar.component';

describe('AdministradorReportesSidebarComponent', () => {
  let component: AdministradorReportesSidebarComponent;
  let fixture: ComponentFixture<AdministradorReportesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorReportesSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorReportesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
