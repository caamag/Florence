import './home.css'; 

import { Link } from 'react-router-dom';

//components
import Carousel from '../components/slider';

function Home () {

    return <div className="container">

        <section className='presentation'>
            <h2>
                Experiência para <br />o resto da <span>vida.</span>   
            </h2>

            <p>———— Desde 2022 ————</p>

            <a 
            href='https://wa.me/5511968705571'
            target='_blank' rel="noreferrer">Agendar seção
            </a>
        </section>

        <section className='video-container'>

            <div className='video-content'>
                <h2>Atendendo <span> suas <br /> expectativas</span></h2>
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
                    <img src='./assets/play-icon.png' alt='play icon'/>
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
                target='_blank' rel="noreferrer">Agendar seção
                </a>

            </div>

        </section>

        <section className='location-container'>

            <div className='depoiments-content'>
                <h2>O que nossos <br /><span>clientes dizem</span></h2>
                <Carousel />
            </div>

            <div className='location-content'>
                <div className='location-text'>
                    <h2>Endereço</h2>
                    <div className='line'></div>
                    <p>Avenida quinze de novembro N°217 <br />
                    Ferraz de Vasconcelos - SP</p>
                    <a href='https://www.google.com/maps/place/Florence+Tattoo+Studio/
                    @-23.5413422,-46.3684457,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce657
                    f1a101937:0x8919ab108aed6fac!8m2!3d-23.5413422!4d-46.3658708!
                    16s%2Fg%2F11vjcfsyt7?entry=ttu' target='_blank' rel="noreferrer">
                    —— Visitar pelo google maps
                    </a>
                </div>
            </div>

        </section>

    </div>

}; 

export default Home; 