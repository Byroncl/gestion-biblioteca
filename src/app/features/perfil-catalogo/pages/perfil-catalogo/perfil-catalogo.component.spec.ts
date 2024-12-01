import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCatalogoComponent } from './perfil-catalogo.component';

describe('PerfilCatalogoComponent', () => {
  let component: PerfilCatalogoComponent;
  let fixture: ComponentFixture<PerfilCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCatalogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
