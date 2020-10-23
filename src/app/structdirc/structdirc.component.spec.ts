import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdircComponent } from './structdirc.component';

describe('StructdircComponent', () => {
  let component: StructdircComponent;
  let fixture: ComponentFixture<StructdircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructdircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructdircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
