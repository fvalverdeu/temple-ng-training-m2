import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailView } from './detail.view';

describe('DetailView', () => {
  let component: DetailView;
  let fixture: ComponentFixture<DetailView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
