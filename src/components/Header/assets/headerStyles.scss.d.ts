declare namespace HeaderStylesScssNamespace {
  export interface IHeaderStylesScss {
    basketButton: string;
    basketIcon: string;
    basketText: string;
    header: string;
    logo: string;
    nav: string;
    navBurger: string;
  }
}

declare const HeaderStylesScssModule: HeaderStylesScssNamespace.IHeaderStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderStylesScssNamespace.IHeaderStylesScss;
};

export = HeaderStylesScssModule;
