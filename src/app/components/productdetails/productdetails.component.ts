import { Component } from '@angular/core';
import { ProductByIdService } from '../../services/product-by-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
 details_product:any
 id:any

 constructor(private detail:ProductByIdService,private rout:ActivatedRoute){
  this.rout.paramMap.subscribe(data=>{
    this.id=data.get('id')
    console.log(this.id)
  })

this.detail.getById(this.id).subscribe(data=>{

  this.details_product=data
  console.log(this.details_product)
})

 }
}
