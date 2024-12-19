import Post from "pags/componentes/Post";
import Banner from "../componentes/Banner";
import styles from './inicio.module.css'
import posts from 'json/posts.json'

export default function Inicio() {
    return(
        <main>
            <Banner/>
            <ul className={styles.posts}>
                {posts.map((card) =>(
                    <li className={card.id}>
                        <Post conteudo={card}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}
