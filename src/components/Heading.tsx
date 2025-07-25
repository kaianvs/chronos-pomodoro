import styles from './Heading.module.css'

export function Heading(){
    console.log(styles.heading)

    const {heading} = styles


    return <h1 className= {heading}>Olá mundo</h1>
} 