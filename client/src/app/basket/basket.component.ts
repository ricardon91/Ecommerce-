import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket, Item } from '../shared/models/basket';
import { BasketService } from '../shared/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<Basket>;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: Item){
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: Item){
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: Item){
    this.basketService.decrementItemQuantity(item);
  }

}
