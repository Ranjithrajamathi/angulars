import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoddoreventComponent } from './foroddorevent.component';

describe('ForoddoreventComponent', () => {
  let component: ForoddoreventComponent;
  let fixture: ComponentFixture<ForoddoreventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoddoreventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoddoreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
