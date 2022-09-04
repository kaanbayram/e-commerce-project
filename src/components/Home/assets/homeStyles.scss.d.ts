declare namespace HomeStylesScssNamespace {
  export interface IHomeStylesScss {
    home: string;
  }
}

declare const HomeStylesScssModule: HomeStylesScssNamespace.IHomeStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeStylesScssNamespace.IHomeStylesScss;
};

export = HomeStylesScssModule;
