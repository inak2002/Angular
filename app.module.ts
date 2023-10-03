import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule} from '@angular/forms';
import { BackcolorDirective } from './backcolor.directive';
import { DoublePipe } from './double.pipe'
import { ArithmeticService } from './arithmetic.service';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const approutes:Routes = [
  { path : 'first',component:FirstComponent},
  { path : 'second',component:SecondComponent},
  { path : 'third',component:ThirdComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BackcolorDirective,
    DoublePipe,
    SecondComponent,
    ThirdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    RouterModule.forRoot(approutes)

  ],
  providers: [ArithmeticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
