import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateView } from './product-create.view';

describe('ProductCreateView', () => {
  let component: ProductCreateView;
  let fixture: ComponentFixture<ProductCreateView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCreateView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
