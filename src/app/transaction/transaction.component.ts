import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import { HttpService } from '../http.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionId: any;
  transaction: any;

  constructor(private _httpService: HttpService,private _route: ActivatedRoute) { }
  id: any
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
    this.id = params['id'];
    });
  }

  getTransaction() {
    this.transaction = this._httpService.getOneLedger(this.id);
  }

}
