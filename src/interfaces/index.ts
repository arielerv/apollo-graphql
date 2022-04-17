export interface IAssets {
    id: number;
    preview: string;
}

export interface IPrice {
    min?: number;
    max?: number;
    value?: number;
}

export interface IOrder {
    productVariantId: number | string;
    quantity: number | string;
}

export interface IProduct {
    productId: number;
    productName: string;
    description: string;
    currencyCode: string;
    price: IPrice;
    productAsset: IAssets
}

export interface ISearchProduct {
    term: string;
}

export interface IEvent {
    preventDefault: () => void;
}
