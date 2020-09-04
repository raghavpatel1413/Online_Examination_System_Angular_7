import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupsetComponent } from './meetupset.component';

describe('MeetupsetComponent', () => {
  let component: MeetupsetComponent;
  let fixture: ComponentFixture<MeetupsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
