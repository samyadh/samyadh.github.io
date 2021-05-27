import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarLayoutComponent } from './right-sidebar-layout.component';

describe('RightSidebarLayoutComponent', () => {
  let component: RightSidebarLayoutComponent;
  let fixture: ComponentFixture<RightSidebarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSidebarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
