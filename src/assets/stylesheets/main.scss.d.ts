declare namespace MainScssNamespace {
  export interface IMainScss {
    "font-bold": string;
    mainStyles: string;
    "text-2xl": string;
    "text-7xl": string;
    underline: string;
  }
}

declare const MainScssModule: MainScssNamespace.IMainScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: MainScssNamespace.IMainScss;
};

export = MainScssModule;
