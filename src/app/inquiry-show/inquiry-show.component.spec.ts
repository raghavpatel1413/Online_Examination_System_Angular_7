import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryShowComponent } from './inquiry-show.component';

describe('InquiryShowComponent', () => {
  let component: InquiryShowComponent;
  let fixture: ComponentFixture<InquiryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
