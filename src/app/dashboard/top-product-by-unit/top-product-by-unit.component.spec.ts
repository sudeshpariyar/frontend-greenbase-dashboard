import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductByUnitComponent } from './top-product-by-unit.component';

describe('TopProductByUnitComponent', () => {
  let component: TopProductByUnitComponent;
  let fixture: ComponentFixture<TopProductByUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProductByUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProductByUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
