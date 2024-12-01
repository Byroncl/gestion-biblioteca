import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNavbarComponent } from './perfil-navbar.component';

describe('PerfilNavbarComponent', () => {
  let component: PerfilNavbarComponent;
  let fixture: ComponentFixture<PerfilNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
