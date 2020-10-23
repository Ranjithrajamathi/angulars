import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucForStatementComponent } from './struc-for-statement.component';

describe('StrucForStatementComponent', () => {
  let component: StrucForStatementComponent;
  let fixture: ComponentFixture<StrucForStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucForStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucForStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
