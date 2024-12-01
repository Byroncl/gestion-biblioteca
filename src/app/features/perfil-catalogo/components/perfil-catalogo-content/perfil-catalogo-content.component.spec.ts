import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCatalogoContentComponent } from './perfil-catalogo-content.component';

describe('PerfilCatalogoContentComponent', () => {
  let component: PerfilCatalogoContentComponent;
  let fixture: ComponentFixture<PerfilCatalogoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilCatalogoContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCatalogoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
