import noticiasDados from "../../dados/noticiasDados";
import '/pages/globals.css'

export default function Noticias ({noticias}) {
    return (
        <div>
            <h1>{noticias.titulo}</h1>
            <p>{noticias.conteudo}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = noticiasDados.map((noticias) => ({params: {id: noticias.id}})); // (params) é a nomenclatura usada nesse caso, não é um namo dado pelo dev mas sim uma func do nextjs.

    return {
        paths, 
        fallback: false // caso ocorra uma falha
    }
}

export async function getStaticProps({params}) {
    const noticias = noticiasDados.find((noticias) => noticias.id === params.id);

    return { 
        props: {
            noticias,
        },
    }
}