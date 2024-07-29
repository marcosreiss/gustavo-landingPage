import '../css/header.css'

export default function Header() {


    return (
        <header>
            <img className='logo' src='./src/assets/plano.png' alt='logo gustavo castroide' />
            <div className='copy-1'>
                <img src='./src/assets/SETA.png' />
                <p>
                    Eu e minha equipe já atendemos mais de  <b>37 empresas em São Luís. </b>
                    Posicionando suas marcas e vendendo pelo Instagram.
                </p>
            </div>

            <div className='copy-2'>
                <p>
                    Nossa prioridade é fazer você ter retorno <b>(clientes comprando seu
                        produto/serviço)</b> antes que nossos primeiros 30 dias de trabalho acabem
                </p>
                <img src='./src/assets/seta-direita.png' />
            </div>

            <div className='copy-3'>
                <p>
                    Para isso, desenvolvemos uma metodologia capaz de posicionar sua marca no mercado, mostrar o seu produto/serviço de forma profissional e captar clientes em grande escala.
                </p>
            </div>
        </header>
    )
}