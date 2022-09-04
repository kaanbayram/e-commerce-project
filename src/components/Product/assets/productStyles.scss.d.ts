declare namespace ProductStylesScssNamespace {
  export interface IProductStylesScss {
    addButton: string;
    price: string;
    product: string;
    productBG: string;
    productImage: string;
    productTitle: string;
  }
}

declare const ProductStylesScssModule: ProductStylesScssNamespace.IProductStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProductStylesScssNamespace.IProductStylesScss;
};

export = ProductStylesScssModule;
