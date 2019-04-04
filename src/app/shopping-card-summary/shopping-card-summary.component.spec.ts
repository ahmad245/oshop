import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardSummaryComponent } from './shopping-card-summary.component';

describe('ShoppingCardSummaryComponent', () => {
  let component: ShoppingCardSummaryComponent;
  let fixture: ComponentFixture<ShoppingCardSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCardSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
