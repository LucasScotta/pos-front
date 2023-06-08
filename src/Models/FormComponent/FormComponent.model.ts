import { CSSProperties, FormEvent, ReactNode } from "react"

type InputType = 'number' | 'text' | 'password'

export interface ForminputDataType {
    type: InputType
    name: string
    required?: true
    description?: string
}
export interface FormComponentProps {
    inputs: ForminputDataType[]
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    children?: ReactNode | ReactNode[]
    submitText: string
    style?: CSSProperties | undefined
}
