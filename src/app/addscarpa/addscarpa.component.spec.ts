import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscarpaComponent } from './addscarpa.component';

describe('AddscarpaComponent', () => {
  let component: AddscarpaComponent;
  let fixture: ComponentFixture<AddscarpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddscarpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddscarpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
