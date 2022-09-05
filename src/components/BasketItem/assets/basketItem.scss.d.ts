declare namespace BasketItemScssNamespace {
  export interface IBasketItemScss {
    count: string;
    item: string;
    leftContainer: string;
    priceTag: string;
    title: string;
  }
}

declare const BasketItemScssModule: BasketItemScssNamespace.IBasketItemScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BasketItemScssNamespace.IBasketItemScss;
};

export = BasketItemScssModule;
