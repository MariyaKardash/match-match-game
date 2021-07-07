import { StyledInput } from '../styled'

export function Input ({id, placeholder, type}) {
    
    function onChangeAction (){
        console.log('change', {id})
    }

    return (
        <StyledInput id={id} type={type} placeholder={placeholder} onChange={onChangeAction}></StyledInput>
    )
}