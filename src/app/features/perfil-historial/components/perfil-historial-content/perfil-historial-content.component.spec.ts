import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilHistorialContentComponent } from './perfil-historial-content.component';

describe('PerfilHistorialContentComponent', () => {
  let component: PerfilHistorialContentComponent;
  let fixture: ComponentFixture<PerfilHistorialContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilHistorialContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilHistorialContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
