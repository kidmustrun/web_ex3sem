import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import {Routes, RouterModule} from '@angular/router';
import { SortPipe } from './pipes/sort.pipe';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FindPositivePipe } from './pipes/find-positive.pipe';


const appRoutes: Routes =[
  {path: '', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatalogComponent,
    SortPipe,
    FilterCategoryPipe,
    FindPositivePipe,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
