import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSortComponent } from './sample-sort.component';

describe('SampleSortComponent', () => {
  let component: SampleSortComponent;
  let fixture: ComponentFixture<SampleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
