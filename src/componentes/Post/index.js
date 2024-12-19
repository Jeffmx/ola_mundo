import { Link } from 'react-router-dom';
import './Post.modular.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

export default function Post({conteudo}){
    return (
        <div className='post'>
                <img className='capa' src={`assets/posts/${conteudo.id}/capa.png`} alt='capa'/>
                <h2 className='titulo'>{conteudo.titulo}</h2>
                <Link to={`/post/${conteudo.id}`}>
                    <BotaoPrincipal>Ler</BotaoPrincipal>
                </Link>
            </div>
    )
}