import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarComponentComponent } from './radar-component.component';

describe('RadarComponentComponent', () => {
  let component: RadarComponentComponent;
  let fixture: ComponentFixture<RadarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
