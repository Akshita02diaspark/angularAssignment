import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarComponentComponent } from './polar-component.component';

describe('PolarComponentComponent', () => {
  let component: PolarComponentComponent;
  let fixture: ComponentFixture<PolarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
