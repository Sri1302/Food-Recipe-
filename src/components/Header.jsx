import styles from './header.module.css'
import TwitterLogin from './TwitterLogin'

export default function Header(){
    return <div className={styles.header}> 🥗Food App 
    <TwitterLogin/>
    </div>
}