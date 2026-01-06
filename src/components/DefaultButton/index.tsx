import  styles  from "./styles.module.css"


type DefaultButtonProps = {
  children: React.ReactNode; // é um tipo definido no TypeScript para representar qualquer coisa que possa ser renderizada pelo React.
  color?: 'start' | 'stop';
} & React.ComponentProps<'button'>


export function DefaultButton({ children, color = 'start',...props}:DefaultButtonProps){
  return(
    <>
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {children}
    </button>
    </>
  )
}