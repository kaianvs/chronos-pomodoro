import  styles  from "./styles.module.css"


type DefaultButtonProps = {
  children: React.ReactNode;
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