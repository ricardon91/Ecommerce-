import { Component, OnInit } from '@angular/core';
import { BasketService } from './shared/services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Ecommerce';  

  constructor(private basketService: BasketService){}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');

    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('inicialized basket')   
      }, error => {
        console.log(error);
      })
    }
  }
}
