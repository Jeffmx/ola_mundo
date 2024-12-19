import './Post.modular.css';

export default function Post({conteudo}){
    return (
        <div className='post'>
            <img className='capa' src={`assets/posts/${conteudo.id}/capa.png`} alt='capa'/>
            <h2 className='titulo'>{conteudo.titulo}</h2>
            <button className='botaoLer'>Ler</button>
        </div>
    )
}