import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  public getParam: any;
  public productList: any;
  @ViewChild('someInput') someInput!: ElementRef<any>;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.getRouteData();
  }

  ngAfterViewInit() {

  }
  ngOnInit(): void {
    this.getSingleProduct();
  }

  private getSingleProduct() {
    this.data.getSingleProduct(this.getParam).subscribe((res: any) => {
      this.productList = res;
    });
  }

  private getRouteData(): void {
    this.route.params.subscribe(res => {
      this.getParam = res['id'];
    });
  }
  changeImage(element: any) {
    // console.log(this.someInput.nativeElement,element)
  }
}