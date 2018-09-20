import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  ShintoCoinValue : number;
  NumberOfCoins : number;
  info = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo()
  }

  getInfo(){
    this.ShintoCoinValue = this._httpService.getShintoCoinValue();
    this.NumberOfCoins = this._httpService.getNumberOfCoins();

  }

  onSubmit(){
    console.log("In Buy Component")
    this._httpService.buyValue();
  }

}
