import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Bill } from "../models/bill";
import { AuthService } from "./auth";

@Injectable()
export class AddService {
    private addbill: Bill[] = [];

    constructor(private http: Http, private authService: AuthService) { }

    addBill(bill: string,
        amount: number) {
        this.addbill.push(new Bill(bill, amount));
        console.log(this.addbill);
    }

    getBill() {
        return this.addbill.slice();
    }

    updateBill(index: number,
        bill: string,
        amount: number) {
        this.addbill[index] = new Bill(bill, amount);
    }

    removeBill(index: number) {
        this.addbill.splice(index, 1);
    }

    storeList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://billsplit-5368b.firebaseio.com' + userId + '/bills.json?auth=' + token, this.addbill)
            .map((response: Response) => response.json());
    }

    fetchList(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get('https://billsplit-5368b.firebaseio.com' + userId + '/bills.json?auth=' + token)
            .map((response: Response) => {
                const addbill: Bill[] = response.json() ? response.json() : [];
                for (let item of addbill) {
                
                }
                return addbill;
            })
            .do((addbill: Bill[]) => {
                if (addbill) {
                    this.addbill = addbill;
                } else {
                    this.addbill = [];
                }
            });
    }
}
