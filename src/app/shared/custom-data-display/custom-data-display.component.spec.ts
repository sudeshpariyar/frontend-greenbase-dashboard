import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataDisplayComponent } from './custom-data-display.component';

describe('CustomDataDisplayComponent', () => {
  let component: CustomDataDisplayComponent;
  let fixture: ComponentFixture<CustomDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDataDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
