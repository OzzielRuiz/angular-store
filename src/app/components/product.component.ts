import {
     Component,
     Input,
     Output,
     EventEmitter,
     OnChanges,
     SimpleChanges,
     OnInit ,
     DoCheck,
     OnDestroy
    } from '@angular/core';
import { Product } from '../product.mode';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: Product ;
  // inicializar el output  se llaman con () en el componente padre
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(){
      console.log('constructor');
  }
// ngOnChanges se ejectua o DoCheck uno u otro a usar
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

// ngDoCheck(): void {
//     console.log('ngDoCheck');
//   }

  ngOnInit(): void {
      console.log('ngOnInit');
  }

 ngOnDestroy(): void {
    console.log('ngOnDestroy');
 }

  addCart(): void {
      console.log('añadir al carrito');
      this.productClicked.emit(this.product.id);
  }
}
