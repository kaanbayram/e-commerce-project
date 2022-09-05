declare namespace IndexScssNamespace {
  export interface IIndexScss {
    "bg-pink-500": string;
    "bg-transparent": string;
    block: string;
    border: string;
    "border-solid": string;
    "border-transparent": string;
    container: string;
    contents: string;
    "cursor-pointer": string;
    filter: string;
    flex: string;
    "flex-col": string;
    "flex-grow": string;
    "flex-row": string;
    "flex-wrap": string;
    "focus:outline-none": string;
    "font-bold": string;
    hidden: string;
    "hover:opacity-75": string;
    "inline-block": string;
    "items-center": string;
    "justify-between": string;
    "justify-start": string;
    "leading-none": string;
    "leading-relaxed": string;
    "leading-snug": string;
    "lg:block": string;
    "lg:flex": string;
    "lg:flex-row": string;
    "lg:hidden": string;
    "lg:justify-start": string;
    "lg:ml-auto": string;
    "lg:static": string;
    "lg:w-auto": string;
    "list-none": string;
    "mb-3": string;
    "ml-2": string;
    "ml-auto": string;
    "mr-4": string;
    "mx-auto": string;
    "opacity-75": string;
    "outline-none": string;
    "overflow-x-hidden": string;
    "overflow-y-hidden": string;
    "px-2": string;
    "px-3": string;
    "px-4": string;
    "py-1": string;
    "py-2": string;
    "py-3": string;
    relative: string;
    rounded: string;
    scrollbar: string;
    "scrollbar-thin": string;
    static: string;
    "text-2xl": string;
    "text-7xl": string;
    "text-lg": string;
    "text-sm": string;
    "text-white": string;
    "text-xl": string;
    "text-xs": string;
    underline: string;
    uppercase: string;
    visible: string;
    "w-auto": string;
    "w-full": string;
    "whitespace-nowrap": string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
