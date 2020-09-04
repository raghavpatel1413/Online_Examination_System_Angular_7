import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayinfoactiveComponent } from './displayinfoactive.component';

describe('DisplayinfoactiveComponent', () => {
  let component: DisplayinfoactiveComponent;
  let fixture: ComponentFixture<DisplayinfoactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayinfoactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayinfoactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
