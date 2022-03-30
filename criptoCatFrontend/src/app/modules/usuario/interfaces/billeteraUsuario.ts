import { Moneda } from "src/app/shared/interfaces/usuarioCache.interface";

export interface BilleteraUsuario {
  id_billetera?: number;
  id_cuenta: number;
  id_moneda:number;
  moneda: Moneda;
  monto_dinero: number;
}