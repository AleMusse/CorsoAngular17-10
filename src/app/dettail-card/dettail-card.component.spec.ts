import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettailCardComponent } from './dettail-card.component';

describe('DettailCardComponent', () => {
  let component: DettailCardComponent;
  let fixture: ComponentFixture<DettailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettailCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
