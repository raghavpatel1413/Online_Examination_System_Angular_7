import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialInventoryComponent } from './raw-material-inventory.component';

describe('RawMaterialInventoryComponent', () => {
  let component: RawMaterialInventoryComponent;
  let fixture: ComponentFixture<RawMaterialInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawMaterialInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
