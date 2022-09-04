declare namespace ProductsStylesScssNamespace {
  export interface IProductsStylesScss {
    buttons: string;
    container: string;
    header: string;
    mug: string;
    pagination: string;
    products: string;
    shirt: string;
  }
}

declare const ProductsStylesScssModule: ProductsStylesScssNamespace.IProductsStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProductsStylesScssNamespace.IProductsStylesScss;
};

export = ProductsStylesScssModule;
