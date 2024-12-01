import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLibrosComponent } from './administrador-libros.component';

describe('AdministradorLibrosComponent', () => {
  let component: AdministradorLibrosComponent;
  let fixture: ComponentFixture<AdministradorLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
