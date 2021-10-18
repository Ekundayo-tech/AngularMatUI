import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePagingComponent } from './sample-paging.component';

describe('SamplePagingComponent', () => {
  let component: SamplePagingComponent;
  let fixture: ComponentFixture<SamplePagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
