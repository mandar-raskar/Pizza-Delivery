import { Component, OnInit } from '@angular/core';
import { PizzaListService } from './pizza-list.service';
import * as moment from 'moment';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: any = []
  get Pizza(): any {
    return localStorage.getItem('Name');
  }

  get Order(): any {
    return localStorage.getItem('Order Time');
  }
  get Delivery(): any {
    return localStorage.getItem('Delivery Time');
  }
  get DiscountedPrice(): any {
    return localStorage.getItem('Discounted Price');
  }

  public Name: any = "";
  public Address: any = "";

  constructor(private PizzaListService: PizzaListService) { }

  ngOnInit() {
    this.getpizza();
  }

  getpizza() {
    this.PizzaListService.getpizzas().subscribe(
      data => {
        var res;
        res = data;
        this.pizzas = res.result;

      }
    )
  }

  postdata1() {
    this.PizzaListService.postdata({ Pizza: this.Pizza, Name: this.Name, Address: this.Address, OrderTime: this.Order, DeliveryTime: this.Delivery, PayableAmount: this.DiscountedPrice }).subscribe(
      data => {
        console.log(data);
      }
    )

    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);

    var OrderTime = moment().toDate();
    localStorage.setItem("Order Time", OrderTime.toString());

    var DeliveryTime = moment(new Date()).add(30, 'minutes');
    localStorage.setItem("Delivery Time", DeliveryTime.toString());
  }

  order(pizza) {
    var Name = pizza.PizzaName;
    var Price = pizza.PizzaPrice;
    var Discount = pizza.Discount;

    localStorage.setItem("Name", Name);

    var DiscountedPrice = Number(Price) - ((Number(Discount) / 100) * Number(Price));
    localStorage.setItem("Discounted Price", DiscountedPrice.toString());
  }
}
