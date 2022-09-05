declare namespace SortingStylesScssNamespace {
  export interface ISortingStylesScss {
    sortingContainer: string;
  }
}

declare const SortingStylesScssModule: SortingStylesScssNamespace.ISortingStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SortingStylesScssNamespace.ISortingStylesScss;
};

export = SortingStylesScssModule;
