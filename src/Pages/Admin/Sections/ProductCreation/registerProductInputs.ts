import { ForminputDataType } from "../../../../Models";

export const registerProductInputs: ForminputDataType[] = [
    { type: 'text', name: 'name', required: true },
    { type: 'number', name: 'price', required: true },
    { type: 'text', name: 'variant', description: 'separate with "," for more than one variant' }
]
