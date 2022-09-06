import { List, Record } from "immutable";
import { ReadonlyRecord } from ".";

export interface IBaseProduct {
    _id: string;
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
}

export interface IProduct extends IBaseProduct {
    tags: Array<string>;
}

export interface IReadOnlyProducts extends IBaseProduct {
    tags: List<string>
}

// export type Product = Record<IProduct> & Readonly<IReadOnlyProductsState>;
export type Product = ReadonlyRecord<IReadOnlyProducts>


export const ProductFactory = Record<IReadOnlyProducts>({
    _id: "",
    price: 0,
    name: "",
    description: "",
    slug: "",
    added: 0,
    manufacturer: "",
    itemType: "",
    tags: List()
})

export const ProductFactoryFromJS = function (data: IProduct) {

    return ProductFactory({
        _id: data._id,
        price: data.price,
        name: data.name,
        description: data.description,
        slug: data.slug,
        added: data.added,
        manufacturer: data.manufacturer,
        itemType: data.itemType,
        tags: List(data.tags),
    })
}