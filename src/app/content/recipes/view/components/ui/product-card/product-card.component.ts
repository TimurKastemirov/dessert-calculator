import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../domain/models/product';
import { RecipePart } from '../../../../domain/models/recipe';
import { Ingredient } from '@content/ingredients/domain/models/ingredient';
import { IngredientPackageUnitMultiplier } from '@core/models/ingredient-package-unit';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
    @Input() product!: Product;
    @Input() ingredients!: Ingredient[];
    @Output() editProduct: EventEmitter<number> = new EventEmitter<number>();
    @Output() deleteProduct: EventEmitter<number> = new EventEmitter<number>();

    calculatedPrice!: number;

    constructor() {}

    ngOnInit(): void {
        this.calculatedPrice = this.calculatePrice(this.product, this.ingredients);
    }

    editItem($event: MouseEvent) {
        $event.stopPropagation();
        this.editProduct.emit(this.product.id);
    }

    deleteItem($event: MouseEvent) {
        $event.stopPropagation();
        this.deleteProduct.emit(this.product.id);
    }

    private calculatePrice(product: Product, list: Ingredient[]): number {
        return product.recipe.reduce((finalPrice: number, recipePart: RecipePart) => {
            const ingredient: Ingredient | undefined = list.find(item => item.id === recipePart.ingredientId);
            if (!ingredient) {
                return finalPrice;
            }
            const currentPrice: number = ingredient.price * (
                (recipePart.amount * IngredientPackageUnitMultiplier[recipePart.unit])
                / (ingredient.package.value * IngredientPackageUnitMultiplier[ingredient.package.unit])
            );
            finalPrice = finalPrice + Number((Math.ceil(currentPrice * 100) / 100).toFixed(2));
            return finalPrice;
        }, 0);
    }
}
