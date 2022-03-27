import Coin from "./interfaceCoin";

export default  interface FormOperacion{
    coinSelected?: Coin;
    cantidadPesos: number;
    cantidadCripto: number;
    tipoOperacion: string;
}