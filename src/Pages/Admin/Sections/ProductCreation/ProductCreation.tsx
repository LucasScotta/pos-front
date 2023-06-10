import { FormEvent, useEffect, useState } from "react"
import { Form } from "../../../../Components"
import { registerProductInputs } from "./registerProductInputs"
import { sendProducts } from "../../Services"
import { useError } from "../../../../Hooks"

export const ProductCreation = () => {
    const { error, setErrorMessage } = useError({ errorMessage: '' })


    const createProduct = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name')?.toString()
        const price = Number(formData.get('price')?.toString())
        // const variant = formData.get('variant')

        if (!name || !name.toString().replaceAll(' ', '')) return setErrorMessage('Name product is required')
        if (!price || isNaN(price) || price < 1) return setErrorMessage('Enter a valid number of products')

        // Fetching products
        const product = { name, price }
        const added = await sendProducts(product)

        if (added instanceof Error) {
            const message = added.message.toString()
            setErrorMessage(message || 'Something went wrong, please try again')
        }
        else if (!product) setErrorMessage('Products couldn\'t be recovered')
        else setErrorMessage('Product added successfuly')
    }

    return (<>
        <Form
            onSubmit={createProduct}
            inputs={registerProductInputs}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            submitText="Create Product">
            <h3>Register new product</h3>
            {!!error && (<p>{error}</p>)}
        </Form>
    </>)
}
