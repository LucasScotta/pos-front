import { FormEvent, useState } from "react"
import { Form } from "../../../../Components"
import { registerProductInputs } from "./registerProductInputs"

export const ProductCreation = () => {
    const [error, setError] = useState('')
    const [timeError, setTimeError] = useState<NodeJS.Timeout>()
    const handleError = (err: string) => {
        clearError()
        setError(err)
        const timeOut = setTimeout(() => setError(''), 3000)
        setTimeError(timeOut)
    }
    const clearError = () => clearInterval(timeError)
    const createProduct = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name')
        const price = Number(formData.get('price'))
        // const variant = formData.get('variant')

        if (!name || !name.toString().replaceAll(' ', '')) return handleError('Name product is required')
        if (!price || isNaN(price) || price < 0) return handleError('Enter a valid number of products')

        // TODO => hacer fetch para crear producto
        // Enviar name y price
    }

    return (
        <Form
            onSubmit={createProduct}
            inputs={registerProductInputs}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            submitText="Create Product">
            <h3>Register new product</h3>
            {!!error && (<p>{error}</p>)}
        </Form>)
}
