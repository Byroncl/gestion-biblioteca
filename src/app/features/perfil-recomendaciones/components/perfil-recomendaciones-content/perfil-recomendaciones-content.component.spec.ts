import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRecomendacionesContentComponent } from './perfil-recomendaciones-content.component';

describe('PerfilRecomendacionesContentComponent', () => {
  let component: PerfilRecomendacionesContentComponent;
  let fixture: ComponentFixture<PerfilRecomendacionesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilRecomendacionesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilRecomendacionesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
