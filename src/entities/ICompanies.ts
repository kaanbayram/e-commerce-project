import { List, Record } from "immutable";
import { ReadonlyRecord } from ".";

export interface IBaseCompany {
    _id: string;
    slug: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    account: number;
    contact: string;
}

export interface ICompany extends IBaseCompany {
}

export interface IReadOnlyCompany extends IBaseCompany {
}

export type Company = ReadonlyRecord<IReadOnlyCompany>


export const CompanyFactory = Record<IReadOnlyCompany>({
    _id: "",
    slug: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    account: 0,
    contact: "",
})

export const CompanyFactoryFromJS = function (data: ICompany) {

    return CompanyFactory({
        _id: data._id,
        slug: data.slug,
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        account: data.account,
        contact: data.contact,
    })
}