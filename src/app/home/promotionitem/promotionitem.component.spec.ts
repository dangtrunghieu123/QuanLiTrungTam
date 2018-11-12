import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionitemComponent } from './promotionitem.component';

describe('PromotionitemComponent', () => {
  let component: PromotionitemComponent;
  let fixture: ComponentFixture<PromotionitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
