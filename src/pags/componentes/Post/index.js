import styles from './post.modular.css';

export default function Post({conteudo}){
    return (
        <div className={styles.post}>
            <img className={styles.capa} src={`assets/posts/${conteudo.id}/capa.png`}/>
            <p>a</p>
        </div>
    )
}