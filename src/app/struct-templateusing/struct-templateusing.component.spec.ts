import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructTemplateusingComponent } from './struct-templateusing.component';

describe('StructTemplateusingComponent', () => {
  let component: StructTemplateusingComponent;
  let fixture: ComponentFixture<StructTemplateusingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructTemplateusingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructTemplateusingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
