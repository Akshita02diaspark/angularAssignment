import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarContainer } from './nav-bar.container';

describe('NavBarComponent', () => {
  let component: NavBarContainer;
  let fixture: ComponentFixture<NavBarContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
