import { Component } from '@angular/core';
import { BillsPage } from '../bills/bills';
import { SplitPage } from '../split/split';
import { AddbillPage } from '../addbill/addbill';

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="billsPage"  tabIcon="paper"></ion-tab>
            <ion-tab [root]="addbillPage" tabIcon="add" ></ion-tab>
            <ion-tab [root]="splitPage"  tabIcon="people"></ion-tab>            
        </ion-tabs>
    `
})
export class TabsPage {

    billsPage = BillsPage;
    splitPage = SplitPage;
    addbillPage = AddbillPage;
}
