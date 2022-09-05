declare namespace ContentStylesScssNamespace {
  export interface IContentStylesScss {
    column: string;
    content: string;
    drawerContainer: string;
    productsColumn: string;
  }
}

declare const ContentStylesScssModule: ContentStylesScssNamespace.IContentStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ContentStylesScssNamespace.IContentStylesScss;
};

export = ContentStylesScssModule;
