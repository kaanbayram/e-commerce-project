declare namespace CounterStylesScssNamespace {
  export interface ICounterStylesScss {
    container: string;
    counter: string;
    decrease: string;
    increase: string;
  }
}

declare const CounterStylesScssModule: CounterStylesScssNamespace.ICounterStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CounterStylesScssNamespace.ICounterStylesScss;
};

export = CounterStylesScssModule;
