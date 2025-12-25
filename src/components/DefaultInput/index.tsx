type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>


export function DefaultInput({ id }:DefaultInputProps){
  return(
  <>
    <label htmlFor={id}>task</label>
    <input  id={id} typeof="text" />
  </>
  )
}