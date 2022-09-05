declare namespace FilterStylesScssNamespace {
  export interface IFilterStylesScss {
    filterContainer: string;
    "overflow-x-hidden": string;
    "overflow-y-hidden": string;
    scrollbar: string;
    search: string;
  }
}

declare const FilterStylesScssModule: FilterStylesScssNamespace.IFilterStylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterStylesScssNamespace.IFilterStylesScss;
};

export = FilterStylesScssModule;
