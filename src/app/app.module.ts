import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { BillsPage } from '../pages/bills/bills';
import { SplitPage } from '../pages/split/split';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { MyComponent } from '../components/foo';
import { AddbillPage } from '../pages/addbill/addbill';
import { AddService } from '../services/add';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BillsPage,
    SplitPage,
    SigninPage,
    RegisterPage,
    MyComponent,
    AddbillPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BillsPage,
    SplitPage,
    SigninPage,
    RegisterPage,
    MyComponent,
    AddbillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AddService
  ]
})
export class AppModule {}
