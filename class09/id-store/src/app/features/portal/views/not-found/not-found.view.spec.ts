import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundView } from './not-found.view';

describe('NotFoundView', () => {
  let component: NotFoundView;
  let fixture: ComponentFixture<NotFoundView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
