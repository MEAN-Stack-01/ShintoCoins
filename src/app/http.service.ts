import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ShintoCoinValue  : number;
  NumberOfCoins : number;
  transactions = [];
  constructor(private _http: HttpClient) {
    this.ShintoCoinValue = 0;
    this.NumberOfCoins = 0;
  }

  getShintoCoinValue(){
    return this.ShintoCoinValue;
  }

  getNumberOfCoins(){
    return this.NumberOfCoins;
  }

  getAllTransactions(){
    return this.transactions;
  }

  addValue(){
    this.ShintoCoinValue += 1;
    this.NumberOfCoins += 1;
    let transaction = {id:Math.floor(Math.random()* 30) + 1, action:"Mined",amount:1,value:this.ShintoCoinValue}
    this.transactions.push(transaction);
    console.log("IN SERVICES",this.transactions);
    // return transaction
  }

  buyValue(){
    this.ShintoCoinValue += 1;
    this.NumberOfCoins += 1;
    let transaction = {id:Math.floor(Math.random()* 30) + 1,action:"Mined",amount:1,value:this.ShintoCoinValue}
    this.transactions.push(transaction);
    console.log("IN SERVICES AFTER BUY",this.transactions);
  }

  sellValue(){
    this.ShintoCoinValue -= 1;
    if(this.NumberOfCoins - 1 > 0){
      this.NumberOfCoins -= 1;
      let transaction = {id:Math.floor(Math.random()* 30) + 1,action:"Mined",amount:1,value:this.ShintoCoinValue}
      this.transactions.push(transaction);
      console.log("IN SERVICES AFTER BUY",this.transactions);
    }
    else{
      return {error:"You dont have enough coins to sell!"}
    }
  }

  getOneLedger(id){
    var result = this.transactions.find(obj => {
      return obj.id === id
    })
  }
}
