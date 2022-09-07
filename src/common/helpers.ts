import { IBasketItem } from "./Basket";

/**
 * Helping to return total basket prices
 * @param basket basket items
 * @returns returnin basket total prices
 */
export function getPrices(basket: string) {
    if (basket) {
        return JSON.parse(basket)
            .map((item: IBasketItem) => (item.count as number) * item.price)
            ?.reduce((result: any, item: IBasketItem) => result + item)
            ?.toFixed(2);
    }
    return 0;
}