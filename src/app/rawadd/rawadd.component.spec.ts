import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawaddComponent } from './rawadd.component';

describe('RawaddComponent', () => {
  let component: RawaddComponent;
  let fixture: ComponentFixture<RawaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
