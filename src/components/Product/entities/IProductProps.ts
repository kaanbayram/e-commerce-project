export interface IProductProps {
    id: string;
    price: number;
    name: string;
    description: string;

    addToBasket: (item: IProductProps) => void;
}