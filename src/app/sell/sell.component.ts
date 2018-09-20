import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  ShintoCoinValue : number;
  NumberOfCoins : number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo(){
    this.ShintoCoinValue = this._httpService.getShintoCoinValue();
    this.NumberOfCoins = this._httpService.getNumberOfCoins();

  }

  onSubmit(){
    console.log("In Buy Component")
    this._httpService.sellValue();
  }

}
