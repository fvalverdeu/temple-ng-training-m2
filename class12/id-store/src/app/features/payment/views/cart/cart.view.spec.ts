import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartView } from './cart.view';

describe('CartView', () => {
  let component: CartView;
  let fixture: ComponentFixture<CartView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
