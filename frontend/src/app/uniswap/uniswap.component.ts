import { Component, OnInit } from '@angular/core';
import { ChainId, Token} from '@uniswap/sdk';

const token = new Token(ChainId.RINKEBY,'0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine');

@Component({
  selector: 'app-uniswap',
  templateUrl: './uniswap.component.html',
  styleUrls: ['./uniswap.component.css']
})
export class UniswapComponent implements OnInit {

  constructor() {
    console.log("this is my token: " + token.address);

  }

  ngOnInit(): void {
  }

}
