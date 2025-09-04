import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ RouterModule,CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Products{

  products = [
    {id: 1, name: "SAMSUNG Galaxy A17 5G", price: 10000, location: "SM Baguio", details: "Excellent Condition"},
    {id: 2, name: "SAMSUNG Galaxy A07", price: 5000, location: "SM Baguio", details: "Excellent Condition"},
    {id: 3, name: "SAMSUNG Galaxy Z Fold7", price: 112990, location: "SM Baguio", details: "Brand-New"},
    {id: 4, name: "SAMSUNG Galaxy Z Flip7", price: 70990, location: "SM San Baguio", details: "Like Brand-New"},
    {id: 5, name: "SAMSUNG Galaxy Z Flip7 FE", price: 56990, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 6, name: "SAMSUNG Galaxy A06 5G", price: 6990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 7, name: "SAMSUNG Galaxy A26 5G", price: 15990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 8, name: "SAMSUNG Galaxy A56 5G", price: 23990, location: "SM Baguio", details: "Good Condition"},
    {id: 9, name: "SAMSUNG Galaxy A36 5G", price: 19990, location: "SM Baguio", details: "Like Brand-New"},
    {id: 10, name: "SAMSUNG Galaxy S25", price: 51990, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 11, name: "SAMSUNG Galaxy S25+", price: 67990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 12, name: "SAMSUNG Galaxy S25 Ultra", price: 84990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 13, name: "SAMSUNG Galaxy A16 LTE", price: 10000, location: "SM Baguio", details: "Good Condition"},
    {id: 14, name: "SAMSUNG Galaxy A16 5G", price: 14000, location: "SM Baguio ", details: "Brand-New"},
    {id: 15, name: "SAMSUNG Galaxy S24 FE", price: 40000, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 16, name: "SAMSUNG Galaxy Z Flip6", price: 71000, location: "SM Baguio", details: "Excellent Condition"},
    {id: 17, name: "SAMSUNG Galaxy Z Fold6", price: 105990, location: "SM Baguio", details: "Brand-New"},
    {id: 18, name: "Samsung Galaxy A55 5G ", price: 24990, location: "SM Baguio", details: "Good Condition"},
    {id: 19, name: "Samsung Galaxy S24 Ultra", price: 84990, location: "SM Baguio", details: "Like Brand-New"},
    {id: 20, name: "Samsung Galaxy S24+", price: 68990, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 21, name: "Samsung Galaxy S24", price: 53990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 22, name: "Samsung Galaxy A25 5G", price: 16000, location: "SM Baguio", details: "Excellent Condition"},
    {id: 23, name: "Samsung Galaxy A15 5G", price: 8000, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 24, name: "Samsung Galaxy A15", price: 12990, location: "SM Baguio", details: "Like Brand-New"},
    {id: 25, name: "Samsung Galaxy A05s", price: 7990, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
    {id: 26, name: "Samsung Galaxy A05", price: 5900, location: "SM Baguio", details: "Excellent Condition"},
    {id: 27, name: "Samsung Galaxy S23 FE ", price: 39990, location: "SM Baguio", details: "Excellent Condition"},
    {id: 28, name: "SAMSUNG Galaxy Z Flip5", price: 64990, location: "SM Baguio", details: "Good Condition"},
    {id: 29, name: "Samsung Galaxy A24", price: 14990, location: "SM Baguio", details: "Like Brand-New"},
    {id: 30, name: "Samsung Galaxy A34 5G ", price: 19990, location: "SM Baguio", details: "Good Condition with Minimal Issues"},
  ]; 
  constructor(private router: Router) {}

  viewDetails(product: any) {
    this.router.navigate(['/product', product.name, product.price]);
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
