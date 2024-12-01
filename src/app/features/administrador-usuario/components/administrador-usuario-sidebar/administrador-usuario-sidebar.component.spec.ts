import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorUsuarioSidebarComponent } from './administrador-usuario-sidebar.component';

describe('AdministradorUsuarioSidebarComponent', () => {
  let component: AdministradorUsuarioSidebarComponent;
  let fixture: ComponentFixture<AdministradorUsuarioSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorUsuarioSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorUsuarioSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
