import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { ProductCardComponent } from './view/components/ui/product-card/product-card.component';
import { ProductListComponent } from './view/components/route/product-list/product-list.component';
import { ProductDetailsComponent } from './view/components/route/product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { ProductsApiService } from '@content/recipes/application/api/products.api.service';
import { ProductStorageService } from '@content/recipes/application/storage/product-storage.service';
import { ProductsService } from '@content/recipes/domain/services/products.service';
import { ProductListResolverService } from '@content/recipes/domain/resolvers/product-list.resolver.service';
import { ProductDetailsResolverService } from '@content/recipes/domain/resolvers/product-details.resolver.service';
import { ProductFormComponent } from './view/components/ui/product-form/product-form.component';
import { ProductDetailsComponentService } from '@content/recipes/view/services/product-details.component.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        RecipesRoutingModule,
        MatButtonModule,
        MatCardModule,
        IngredientsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
    ],
    declarations: [
        ProductCardComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ProductFormComponent
    ],
    providers: [
        ProductStorageService,
        ProductsApiService,
        ProductsService,
        ProductListResolverService,
        ProductDetailsResolverService,
        ProductDetailsComponentService,
    ],
})
export class RecipesModule {
}
