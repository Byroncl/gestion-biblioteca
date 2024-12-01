import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorLibrosTableComponent } from './administrador-libros-table.component';

describe('AdministradorLibrosTableComponent', () => {
  let component: AdministradorLibrosTableComponent;
  let fixture: ComponentFixture<AdministradorLibrosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorLibrosTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorLibrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
