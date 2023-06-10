import { IProduct } from ".."
export type IProductDTO = Omit<IProduct, 'id'>
