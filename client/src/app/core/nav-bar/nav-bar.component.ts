import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from 'src/app/shared/models/basket';
import { BasketService } from 'src/app/shared/services/basket.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<Basket>;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

}
