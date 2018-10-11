import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OrderListComponent } from './order-list/order-list.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'order', component: OrderListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
