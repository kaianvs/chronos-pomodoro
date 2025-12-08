import styles from './styles.module.css'

type HeadingProps = {
    children: string;
}

export function Heading({children}: HeadingProps){


    const {heading} = styles


    return <h1 className= {heading}>{children}</h1>
} 