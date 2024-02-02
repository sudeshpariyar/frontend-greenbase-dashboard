import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavIndividualComponent } from './sidenav-individual.component';

describe('SidenavIndividualComponent', () => {
  let component: SidenavIndividualComponent;
  let fixture: ComponentFixture<SidenavIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
