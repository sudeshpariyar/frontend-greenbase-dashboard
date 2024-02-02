import { Component, OnInit } from '@angular/core';
export interface Transaction {
  name: string;
  imageUrl: string;
  price: number;
  unitSold: number;
}
const TRANSACTION_DATA: Transaction[] = [
  {
    price: 14.5,
    name: 'Men Black Tshirt',
    unitSold: 179,
    imageUrl: '/assets/t-shirt.jpg',
  },
  {
    price: 84.5,
    name: 'Men Hoodie',
    unitSold: 79,
    imageUrl: '/assets/men-hodie.jpg',
  },
  {
    price: 18.5,
    name: 'Women Tshirt',
    unitSold: 19,
    imageUrl: '/assets/women-tshirt.jpg',
  },
  {
    price: 550,
    name: 'Lace up boot',
    unitSold: 89,
    imageUrl: '/assets/shoes.jpg',
  },
  {
    price: 184.5,
    name: 'Men Stripe Tshirt',
    unitSold: 179,
    imageUrl: '/assets/stripe-tshirt.jpg',
  },
  {
    price: 25,
    name: 'Red Tshirt',
    unitSold: 68,
    imageUrl: '/assets/red-tshirt.jpg',
  },
];

@Component({
  selector: 'app-top-product-by-unit',
  templateUrl: './top-product-by-unit.component.html',
  styleUrls: ['./top-product-by-unit.component.scss'],
})
export class TopProductByUnitComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ['name', 'price', 'unitSold'];
  dataSource = TRANSACTION_DATA;

  ngOnInit(): void {}
}
