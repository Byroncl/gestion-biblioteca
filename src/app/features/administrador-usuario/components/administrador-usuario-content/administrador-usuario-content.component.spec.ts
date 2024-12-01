import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorUsuarioContentComponent } from './administrador-usuario-content.component';

describe('AdministradorUsuarioContentComponent', () => {
  let component: AdministradorUsuarioContentComponent;
  let fixture: ComponentFixture<AdministradorUsuarioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorUsuarioContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorUsuarioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
