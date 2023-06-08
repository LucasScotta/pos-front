import { FormComponentProps } from "../../Models"

export const Form = ({ inputs, onSubmit, style = {}, submitText, children }: FormComponentProps) => {
    return (
        <form onSubmit={onSubmit} style={style}>
            {children}
            {inputs.map(input => (
                <input
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    required={input.required} />)
            )}
            <button>{submitText}</button>
        </form>)
}
