import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
     addToCart:number = 0;
     name = 'HiuBoo';
     product = {
        Image: '/assets/anh1.webp',
        name: 'Tủ Lạnh Mini',
        price: 1000,
        color: 'Trắng',
        discount: 10,
        inStock: 5
     }

    getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
    }
    
    decrementCartValue() {
      if (this.addToCart > 0) {
        this.addToCart--;
      }
    }

    incrementCartValue() {
      if (this.addToCart < this.product.inStock) {
        this.addToCart++;
      }
    }

//     getOnNameChange(event: any) {
//        this.name = event.target.value;
//     }
}


