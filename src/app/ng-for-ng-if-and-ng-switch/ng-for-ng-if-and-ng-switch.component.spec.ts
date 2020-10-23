import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForNgIfAndNgSwitchComponent } from './ng-for-ng-if-and-ng-switch.component';

describe('NgForNgIfAndNgSwitchComponent', () => {
  let component: NgForNgIfAndNgSwitchComponent;
  let fixture: ComponentFixture<NgForNgIfAndNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForNgIfAndNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForNgIfAndNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
