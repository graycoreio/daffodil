/**
 * Represents a product from the Medusa e-commerce platform.
 */
export interface MedusaProduct {
  /** Unique identifier for the product */
  id: string;
  /** Display name of the product */
  title: string;
  /** URL-friendly identifier for the product */
  handle: string;
  /** Product description */
  description?: string;
  /** URL of the product's thumbnail image */
  thumbnail?: string;
  /** Array of product images */
  images?: MedusaProductImage[];
  /** Product status (draft, published, etc.) */
  status: string;
  /** ISO timestamp when the product was created */
  created_at: string;
  /** ISO timestamp when the product was last updated */
  updated_at: string;
  /** Product variants with different pricing and options */
  variants?: MedusaProductVariant[];
  /** Available product options (size, color, etc.) */
  options?: MedusaProductOption[];
  /** Tags associated with the product */
  tags?: MedusaProductTag[];
  /** Product type classification */
  type?: MedusaProductType;
  /** Collection this product belongs to */
  collection?: MedusaProductCollection;
  /** Additional metadata as key-value pairs */
  metadata?: Record<string, any>;
}

/**
 * Represents an image associated with a Medusa product.
 */
export interface MedusaProductImage {
  /** Unique identifier for the image */
  id: string;
  /** URL of the image */
  url: string;
  /** Additional metadata for the image */
  metadata?: Record<string, any>;
}

/**
 * Represents a product variant with specific pricing and inventory.
 */
export interface MedusaProductVariant {
  /** Unique identifier for the variant */
  id: string;
  /** Display name of the variant */
  title: string;
  /** Pricing information for different regions/currencies */
  prices: MedusaProductPrice[];
  /** Stock keeping unit identifier */
  sku?: string;
  /** Barcode for the variant */
  barcode?: string;
  /** European Article Number */
  ean?: string;
  /** Universal Product Code */
  upc?: string;
  /** Available inventory quantity */
  inventory_quantity?: number;
  /** Whether backorders are allowed when out of stock */
  allow_backorder?: boolean;
  /** Whether inventory is managed for this variant */
  manage_inventory?: boolean;
  /** Additional metadata for the variant */
  metadata?: Record<string, any>;
}

/**
 * Represents pricing information for a product variant.
 */
export interface MedusaProductPrice {
  /** Unique identifier for the price */
  id: string;
  /** Currency code (USD, EUR, etc.) */
  currency_code: string;
  /** Price amount in the smallest currency unit (cents) */
  amount: number;
  /** Region this price applies to */
  region_id?: string;
  /** Price list this price belongs to */
  price_list_id?: string;
}

/**
 * Represents a product option (like size, color) with possible values.
 */
export interface MedusaProductOption {
  /** Unique identifier for the option */
  id: string;
  /** Display name of the option (Size, Color, etc.) */
  title: string;
  /** Available values for this option */
  values: MedusaProductOptionValue[];
}

/**
 * Represents a specific value for a product option.
 */
export interface MedusaProductOptionValue {
  /** Unique identifier for the option value */
  id: string;
  /** The actual value (Small, Red, etc.) */
  value: string;
  /** ID of the option this value belongs to */
  option_id: string;
}

/**
 * Represents a tag associated with a product.
 */
export interface MedusaProductTag {
  /** Unique identifier for the tag */
  id: string;
  /** Tag value/name */
  value: string;
}

/**
 * Represents a product type classification.
 */
export interface MedusaProductType {
  /** Unique identifier for the product type */
  id: string;
  /** Type name/value */
  value: string;
}

/**
 * Represents a product collection grouping.
 */
export interface MedusaProductCollection {
  /** Unique identifier for the collection */
  id: string;
  /** Display name of the collection */
  title: string;
  /** URL-friendly identifier for the collection */
  handle: string;
}
