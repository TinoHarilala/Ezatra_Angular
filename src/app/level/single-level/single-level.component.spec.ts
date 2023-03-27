import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLevelComponent } from './single-level.component';

describe('SingleLevelComponent', () => {
  let component: SingleLevelComponent;
  let fixture: ComponentFixture<SingleLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
