import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeView } from './home.view';

describe('HomeView', () => {
  let component: HomeView;
  let fixture: ComponentFixture<HomeView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
