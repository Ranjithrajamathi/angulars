import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdirectiveComponent } from './showdirective.component';

describe('ShowdirectiveComponent', () => {
  let component: ShowdirectiveComponent;
  let fixture: ComponentFixture<ShowdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
