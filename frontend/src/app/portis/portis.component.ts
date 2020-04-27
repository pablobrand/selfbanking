import { Component, OnInit } from '@angular/core';
import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('3febd4a7-570f-4515-bc40-2963e3db29b3', 'rinkeby');
const web3 = new Web3(portis.provider);

@Component({
  selector: 'app-portis',
  styleUrls: ['./portis.component.css'],
  template: `
    <button mat-flat-button color="basic" (click)="openPortis()">Portis Wallet</button>
    `
})


export class PortisComponent implements OnInit {
  clickedMessage = "";


  openPortis(){
    this.clickedMessage = "my button was clicked!";
    portis.provider.enable();

    portis.showPortis();
    // web3.eth.getAccounts((error, accounts) => {
    //   portis.showPortis();
    //   console.log(accounts);
    //   console.log("Portist Account: "+portis.showPortis());

    // });

    // portis.onLogin(
    //   (walletAddress, email, reputation)=>{
    //     console.log(
    //       "Wallet Address: " + walletAddress
    //       + " Email: "+ email
    //       +" Reputation: "+ reputation
    //     );
    //   }
    // );





  };



  constructor() {


  }

  ngOnInit(): void {
  }

}
