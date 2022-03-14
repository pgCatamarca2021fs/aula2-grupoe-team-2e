export default interface Coin { 
    id?: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    last_updated:string;

}