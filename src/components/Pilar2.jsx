import '../css/pilar2.css'

export default function Pilar2(){


    return(
        <section className='pilar2'>
            <img src='src\assets\Pilar2\titulo.png' alt='' className='title2' />

            <p className='copy-pilar2 p1'>
                Sem um conteúdo profissional, você sempre vai parecer um amador. 
                Não importa o quanto seu trabalho/produto seja bom, se não for apresentado 
                da forma certa, você parecerá ruim.
            </p>
            <p className='copy-pilar2 p2'>
                <b>Por isso o segundo pilar é produção de conteúdo.</b>
            </p>
            <div className='frame'>
                <img src='src\assets\Pilar2\feed-1.png' alt='' className='feed feed-1' />
                <img src='src\assets\Pilar2\feed-2.png' alt='' className='feed feed-2' />
                <img src='src\assets\Pilar2\feed-3.png' alt='' className='feed feed-3' />
                <img src='src\assets\Pilar2\feed-4.png' alt='' className='feed feed-4' />
            </div>

            <p className='copy-pilar2 p3'>
                Para entregar 3 postagens semanais e manter a frequência de conteúdo no 
                seu perfil, um dos nossos produtores estará na sua empresa duas vezes por 
                mês para captação de foto e vídeo em alta qualidade do seu produto/serviço.
            </p>

        </section>
    )
}