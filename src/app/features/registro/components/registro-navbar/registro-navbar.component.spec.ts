import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNavbarComponent } from './registro-navbar.component';

describe('RegistroNavbarComponent', () => {
  let component: RegistroNavbarComponent;
  let fixture: ComponentFixture<RegistroNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
