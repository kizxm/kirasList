import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
{
    path: 'category-listing',
    component: CategoryListingComponent
  },
  {
    path: 'item',
    component: ItemComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
