declare namespace FilterStylesScssNamespace {
  export interface IFilterStylesScss {
    container: string;
    filter: string;
    filterContainer: string;
    header: string;
    sorting: string;
    sortingContainer: string;
  }
}

declare const FilterStylesScssModule: FilterStylesScssNamespace.IFilterStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterStylesScssNamespace.IFilterStylesScss;
};

export = FilterStylesScssModule;
