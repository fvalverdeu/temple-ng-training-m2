import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListView } from './products-list.view';

describe('ProductsListView', () => {
  let component: ProductsListView;
  let fixture: ComponentFixture<ProductsListView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
