declare namespace BasketStylesScssNamespace {
  export interface IBasketStylesScss {
    basket: string;
    basketButton: string;
    basketItems: string;
    "overflow-x-hidden": string;
    "overflow-y-hidden": string;
  }
}

declare const BasketStylesScssModule: BasketStylesScssNamespace.IBasketStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BasketStylesScssNamespace.IBasketStylesScss;
};

export = BasketStylesScssModule;
