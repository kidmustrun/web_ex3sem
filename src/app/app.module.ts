import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import {Routes, RouterModule} from '@angular/router'

const appRoutes: Routes =[
  {path: '', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
