import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorReportesContentComponent } from './administrador-reportes-content.component';

describe('AdministradorReportesContentComponent', () => {
  let component: AdministradorReportesContentComponent;
  let fixture: ComponentFixture<AdministradorReportesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorReportesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorReportesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
