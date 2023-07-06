import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LivechatComponent } from './livechat/livechat.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild([
      {
        path: '', component: MainComponent,
        children: [
          { path: '', loadChildren: () => import('./hompage/hompage.module').then(m => m.HompageModule) },
          { path: 'buyer', loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule) },
          { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
          { path: 'transfer', loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule) },
        ]
      },
    ])
  ],
  declarations: [MainComponent, ListComponent, DetailComponent,LivechatComponent]
})
export class MainModule { }
