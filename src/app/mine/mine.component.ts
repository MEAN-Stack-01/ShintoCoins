import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer: any;

  quest = "What is the 7th Fibonacci Sequence number?"
                 // "y = log x If y = 10, then what is x? y = logxif y=10 what is X?": 1,
                 // "In this sequence, 11 4 20 45 32 60 98 70, which element seems to be the pivot?": 20,
                 // "In a balance binary tree the height of two sub trees of every node can not differ by more than" : 2,


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("In Mine Component",this.answer)
    if (this.answer == 13) {
      this._httpService.addValue();
      
      // observable.subscribe(info => {
      //   console.log("MINE INFO", info);
      // })
      // this.NumberOfCoins += 1;
      // this.ShintoCoinValue += 1;
    }




  }


}
