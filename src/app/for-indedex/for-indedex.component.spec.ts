import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForIndedexComponent } from './for-indedex.component';

describe('ForIndedexComponent', () => {
  let component: ForIndedexComponent;
  let fixture: ComponentFixture<ForIndedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForIndedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForIndedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
