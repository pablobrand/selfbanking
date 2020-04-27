import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniswapComponent } from './uniswap.component';

describe('UniswapComponent', () => {
  let component: UniswapComponent;
  let fixture: ComponentFixture<UniswapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniswapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniswapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
