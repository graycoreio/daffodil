import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCompositeProduct, DaffProductTypeEnum, DaffCompositeProductItemInputEnum } from '@daffodil/product';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * Mocked DaffCompositeProduct object.
 */
export class MockCompositeProduct implements DaffCompositeProduct {
	private stubPrice = faker.random.number({min: 1, max: 1500});
	private stubDiscount = faker.random.number({min: 0, max: this.stubPrice - 1});
	private stubDiscountedPrice = this.stubPrice - this.stubDiscount;
	private stubOption1Price = faker.random.number({min: 1, max: 100});
	private stubOption1Discount = faker.random.number({min: 0, max: this.stubOption1Price - 1});
	private stubOption1DiscountedPrice = this.stubOption1Price - this.stubOption1Discount;
	private stubOption2Price = faker.random.number({min: 1, max: 100});
	private stubOption2Discount = faker.random.number({min: 0, max: this.stubOption2Price - 1});
	private stubOption2DiscountedPrice = this.stubOption2Price - this.stubOption2Discount;
	private stubOption3Price = faker.random.number({min: 1, max: 100});
	private stubOption3Discount = faker.random.number({min: 0, max: this.stubOption3Price - 1});
	private stubOption3DiscountedPrice = this.stubOption3Price - this.stubOption3Discount;
	private stubOption4Price = faker.random.number({min: 1, max: 100});
	private stubOption4Discount = faker.random.number({min: 0, max: this.stubOption4Price - 1});
	private stubOption4DiscountedPrice = this.stubOption4Price - this.stubOption4Discount;
	type = DaffProductTypeEnum.Composite;
	id = faker.random.number({min: 1, max: 10000}).toString();
	url = faker.random.alphaNumeric(16);
	images = [];
	price = {
		originalPrice: this.stubPrice,
		discount: {
			amount: this.stubDiscount,
			percent: this.stubDiscount/this.stubPrice
		},
		discountedPrice: this.stubDiscountedPrice
	};
	in_stock = true;
  name = faker.commerce.productName();
  brand = faker.company.companyName();
	description = 'Lorem ipsum dolor sit amet, accumsan ullamcorper ei eam. Sint appetere ocurreret no per, et cum lorem disputationi. Sit ut magna delenit, assum vidisse vocibus sed ut. In aperiri malorum accusamus sea, novum mediocritatem ius at. Duo agam probo honestatis ut. Nec regione splendide cu, unum graeco vivendum in duo.'
	items = [
		{
			id: faker.random.alphaNumeric(10),
			required: faker.random.boolean(),
			title: faker.commerce.productName(),
			input_type: DaffCompositeProductItemInputEnum.select,
			options: [
				{
					id: faker.random.alphaNumeric(10),
					images: [],
					name: faker.commerce.productMaterial(),
					price: {
						originalPrice: this.stubOption1Price,
						discount: {
							amount: this.stubOption1Discount,
							percent: Math.floor((this.stubOption1Discount/this.stubOption1Price) * 100)
						},
						discountedPrice: this.stubOption1DiscountedPrice
					},
					quantity: faker.random.number({min: 1, max: 9}),
					is_default: true,
					in_stock: true
				},
				{
					id: faker.random.alphaNumeric(10),
					name: faker.commerce.productMaterial(),
					images: [],
					price: {
						originalPrice: this.stubOption2Price,
						discount: {
							amount: this.stubOption2Discount,
							percent: Math.floor((this.stubOption2Discount/this.stubOption2Price) * 100)
						},
						discountedPrice: this.stubOption2DiscountedPrice
					},
					quantity: faker.random.number({min: 1, max: 9}),
					is_default: false,
					in_stock: true
				}
			]
		},
		{
			id: faker.random.alphaNumeric(10),
			required: faker.random.boolean(),
			title: faker.commerce.productName(),
			input_type: DaffCompositeProductItemInputEnum.select,
			options: [
				{
					id: faker.random.alphaNumeric(10),
					name: faker.commerce.productMaterial(),
					images: [],
					price: {
						originalPrice: this.stubOption3Price,
						discount: {
							amount: this.stubOption3Discount,
							percent: Math.floor((this.stubOption3Discount/this.stubOption3Price) * 100)
						},
						discountedPrice: this.stubOption3DiscountedPrice
					},
					quantity: faker.random.number({min: 1, max: 9}),
					is_default: true,
					in_stock: true
				},
				{
					id: faker.random.alphaNumeric(10),
					name: faker.commerce.productMaterial(),
					images: [],
					price: {
						originalPrice: this.stubOption4Price,
						discount: {
							amount: this.stubOption4Discount,
							percent: Math.floor((this.stubOption4Discount/this.stubOption4Price) * 100)
						},
						discountedPrice: this.stubOption4DiscountedPrice
					},
					quantity: faker.random.number({min: 1, max: 9}),
					is_default: false,
					in_stock: true
				}
			]
		}
	]
}

/**
 * Factory for creating DaffCompositeProducts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffCompositeProductFactory extends DaffModelFactory<DaffCompositeProduct>{
  constructor(){
    super(MockCompositeProduct);
  }
}
