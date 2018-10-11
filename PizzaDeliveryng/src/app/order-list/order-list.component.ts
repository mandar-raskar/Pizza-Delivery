import { Component, OnInit } from '@angular/core';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  details: any = ''
  constructor(private OrderListService: OrderListService) { }

  ngOnInit() {
    this.OrderListService.getdata().subscribe(
      data => {
        var res;
        res = data;
        this.details = res.result;

      }
    )
  }



}
