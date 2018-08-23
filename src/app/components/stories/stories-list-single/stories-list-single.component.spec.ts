import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesListSingleComponent } from './stories-list-single.component';

describe('StoriesListSingleComponent', () => {
  let component: StoriesListSingleComponent;
  let fixture: ComponentFixture<StoriesListSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesListSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesListSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
