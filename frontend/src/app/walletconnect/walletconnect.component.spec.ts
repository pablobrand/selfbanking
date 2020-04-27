import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletconnectComponent } from './walletconnect.component';

describe('WalletconnectComponent', () => {
  let component: WalletconnectComponent;
  let fixture: ComponentFixture<WalletconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
