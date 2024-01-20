import './home.css'; 

import { Link } from 'react-router-dom';

function Home () {

    return <div className="container">

        <section className='presentation'>
            <h2>
                Experiência para <br />o resto da <span>vida.</span>   
            </h2>

            <p>———— Desde 2022 ————</p>

            <a 
            href='https://wa.me/5511968705571'
            target='_blank'>Agendar seção
            </a>
        </section>

        <section className='video-container'>

            <div className='video-content'>
                <h2>Atendendo <span>as suas <br /> expectativas</span></h2>
                <div className='line'></div>
                <p>
                    Algum texto comercial que tenha como intenção
                    atrair clientes ou criar uma espécie de convite
                    para tatuar e tudo mais. <br />
                    Algum texto comercial que tenha como intenção
                    atrair clientes ou criar uma espécie de convite
                    para tatuar e tudo mais. 
                </p>
            </div>

            <div className='video-presentation'>
                <button onClick={() => {
                    alert('video btn clicado'); 
                }}>
                    <img src='./assets/play-icon.png' />
                </button>
            </div>

        </section>

        <section className='services-container'>
            <div className='service-cards'>
                <div className='card'><p><Link>REALISMO</Link></p></div>

                <div className='card'><p><Link>BLACK WORK</Link></p></div>

                <div className='card'><p><Link>FINE LINE</Link></p></div>

                <div className='card'><p><Link>COBERTURA</Link></p></div>
            </div>  

            <div className='service-content'>

                <h2>Estilos de <span>Tattoo</span></h2>
                <div className='line'></div>
                <p>
                    Algum texto comercial que tenha como intenção
                    atrair clientes ou criar uma espécie de convite
                    para tatuar e tudo mais. <br />
                    Algum texto comercial que tenha como intenção
                    atrair clientes ou criar uma espécie de convite
                    para tatuar e tudo mais. 
                </p>
                <a 
                href='https://wa.me/5511968705571'
                target='_blank'>Agendar seção
                </a>

            </div>

        </section>

    </div>

}; 

export default Home; 