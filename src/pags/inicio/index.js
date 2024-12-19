import Post from "componentes/Post";
import styles from './inicio.module.css'
import posts from 'json/posts.json'

export default function Inicio() {
    return(
        <ul className={styles.posts}>
            {posts.map((card) =>(
                <li className={card.id}>
                    <Post conteudo={card}/>
                </li>
            ))}
        </ul>
    )
}
