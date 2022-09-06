export class Basket {

    static addToBasket(basketItem: IBasketItem) {
        let basket = [];
        if (localStorage.getItem('basket') as string) {
            basket = JSON.parse(localStorage.getItem('basket') as string)
        }
        const item = basket.find((_item: any) => _item.id === basketItem.id);
        if (item) {
            item.count++;
        }
        else {
            basket.push({
                id: basketItem.id,
                price: basketItem.price,
                name: basketItem.name,
                count: 1
            });
        }

        localStorage.setItem('basket', JSON.stringify(basket));

        return JSON.stringify(basket);
    }

    static deleteFromBasket(id: string) {
        let basket = JSON.parse(localStorage.getItem('basket') as string) || [];
        const item = basket.find((basketItem: any) => basketItem.id === id);
        if (item) {
            item.count--;
        }

        if (!item.count) {
            basket = basket.filter((basketItem: any) => basketItem.id !== id);
        }

        if (!basket.length) {
            localStorage.setItem('basket', "");

            return "";
        }
        else {
            localStorage.setItem('basket', JSON.stringify(basket));

            return JSON.stringify(basket)
        }

    }
}

export interface IBasketItem {
    id: string,
    name: string,
    price: number,
    count?: number,
}