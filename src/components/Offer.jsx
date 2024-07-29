import '../css/offer.css'

export default function Offer(){

    return(
        <section className='offer'>
            <div className='p1'>
                <img src='src\assets\header\seta-esquerda.png' alt='' />
                <p>
                    Para execução de todos os três pilares, nossa equipe dispõe de produtor de conteúdo 
                    (fotógrafo & filmmaker), designer, editor de foto e vídeo, gestor de tráfego, social 
                    media, e vários outros profissionais da equipe que tornam essa estrutura de vendas 
                    pelo digital possível.
                </p>
            </div>

            <div className='p2'>
                <img src='src\assets\header\seta-esquerda.png' alt=''/>
                <p>
                    Seu investimento para ter um retorno em vendas antes dos nossos primeiros 30 dias 
                    de trabalho chegarem, é de apenas:
                </p>
                <img src='src\assets\header\seta-direita.png' alt='' />
            </div>

            <img src='src\assets\Offer\preco.png' alt='' className='offer-img' />
        </section>        
    )
}
