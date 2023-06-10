import { IProduct } from "../../../../Models"

interface ProductEditorProps { products: IProduct[] }
export const ProductEditor = ({ products }: ProductEditorProps) => {
    const deleteProduct = (id: number) => {
        console.log(id)
    }
    return <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
        </thead>
        <tbody>
            {
                products && products.map(product => {
                    const { id, name, price } = product
                    return <tr key={name}>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td><button onClick={() => deleteProduct(id)}>X</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>
}