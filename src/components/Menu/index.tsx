import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon} from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

type AvailableThemes = 'light' | 'dark'

export function Menu(){

    const [theme, setTheme] = useState<AvailableThemes>(()=>{
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';

        return storageTheme;
    });

    function handleThemeChange(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <nav className= {styles.menu}>
        <a className={styles.menuLink} href="#" arial-label = 'Ir para a Home' title = 'Ir para a Home' >
            <HouseIcon />
        </a>
         <a className={styles.menuLink} href="#" arial-label = 'Ver Histórico' title = 'Ver Histórico' >
            <HistoryIcon />
        </a>
         <a className={styles.menuLink} href="#" arial-label = 'Ir para a Home' title = 'Ir para a Home'>
            <SettingsIcon/>
        </a>
         <a className={styles.menuLink} href="#" arial-label = 'Ir para a Home' title = 'Mudar o tema' onClick ={handleThemeChange} >
            {theme === 'light' ? <MoonIcon/> : <SunIcon/>}
        </a>
    </nav>
}