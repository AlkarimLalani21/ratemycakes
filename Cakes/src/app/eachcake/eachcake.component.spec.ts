import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachcakeComponent } from './eachcake.component';

describe('EachcakeComponent', () => {
  let component: EachcakeComponent;
  let fixture: ComponentFixture<EachcakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachcakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
