import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StupanelComponent } from './stupanel.component';

describe('StupanelComponent', () => {
  let component: StupanelComponent;
  let fixture: ComponentFixture<StupanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StupanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
