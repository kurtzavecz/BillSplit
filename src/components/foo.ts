import { Component } from '@angular/core';
import { Bill } from '../models/bill';
import { BillsPage } from '../pages/bills/bills';
import { NavController } from '../../node_modules/ionic-angular/umd';
import { AddService } from '../services/add';
import { AuthService } from '../services/auth';
import { AddbillPage } from '../pages/addbill/addbill';

@Component({
  selector: 'my-component',
  templateUrl: 'foo.html'
})
export class MyComponent {

  constructor() {
  }



}