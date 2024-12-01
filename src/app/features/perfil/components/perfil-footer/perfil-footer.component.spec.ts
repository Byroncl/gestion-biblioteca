import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFooterComponent } from './perfil-footer.component';

describe('PerfilFooterComponent', () => {
  let component: PerfilFooterComponent;
  let fixture: ComponentFixture<PerfilFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
