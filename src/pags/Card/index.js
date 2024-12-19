import './Card.css'
import { useParams } from "react-router-dom";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from 'react-markdown';
import posts from 'json/posts.json'

export default function Card(){
    const parametro = useParams()

    const post = posts.find((post) => {
        return post.id ===Number(parametro.id)
    })

    if (!post) {
        return <h1>Post não encontrado...</h1>
    }

    return(
        <PostModelo 
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}
