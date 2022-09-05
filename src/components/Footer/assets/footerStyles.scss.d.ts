declare namespace FooterStylesScssNamespace {
  export interface IFooterStylesScss {
    footer: string;
  }
}

declare const FooterStylesScssModule: FooterStylesScssNamespace.IFooterStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterStylesScssNamespace.IFooterStylesScss;
};

export = FooterStylesScssModule;
