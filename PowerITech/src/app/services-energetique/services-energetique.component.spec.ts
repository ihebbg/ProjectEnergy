import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEnergetiqueComponent } from './services-energetique.component';

describe('ServicesEnergetiqueComponent', () => {
  let component: ServicesEnergetiqueComponent;
  let fixture: ComponentFixture<ServicesEnergetiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesEnergetiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesEnergetiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
