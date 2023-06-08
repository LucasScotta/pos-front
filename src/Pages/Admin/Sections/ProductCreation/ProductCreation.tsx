import { FormEvent } from "react"

export const ProductCreation = () => {
    const createProduct = (e: FormEvent) => e.preventDefault()

    return <form onClick={createProduct} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Register new product</h3>
        <input type="text" name="name" required defaultValue="" />
        <input type="number" name="price" required defaultValue="" />
        <button>Create Product</button>
    </form>
}
