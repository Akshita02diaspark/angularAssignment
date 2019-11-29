import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreContainer } from './core.container';

describe('CoreComponent', () => {
  let component: CoreContainer;
  let fixture: ComponentFixture<CoreContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
