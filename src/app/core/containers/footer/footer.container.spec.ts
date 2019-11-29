import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainer } from './footer.container';

describe('FooterComponent', () => {
  let component: FooterContainer;
  let fixture: ComponentFixture<FooterContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
