import Carousel from 'react-bootstrap/Carousel';
const feather = require('feather-icons');
import { useNavigate } from "react-router-dom";
import Fotos from './data/fotos.json'

setTimeout(() =>{
  feather.replace();
}, 1000);

const Main = () => {

  const navigate = useNavigate();

  const handleClick = (slug) => {
      navigate("/detalle/" + slug);
  }
  
    return <main>
        <Carousel>
            {
                Fotos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>

        
        <h1>
            ¡¡¡Pepinillo Rick!!!
        </h1>
        <p>
            ¡Lleva a casa la locura de Rick y Morty con nuestros peluches de Pepinillo Rick! Suaves, adorables y llenos de personalidad, estos peluches son el regalo perfecto para cualquier fan. ¡Hazte con el tuyo y lleva un trozo del universo de Rick y Morty a casa hoy mismo!
        </p>
        <p>
          Imagenes e informacion mas detalladas  <i data-feather="eye"></i>
        </p>
        <p>
          Te gustan las imagenes?  <i data-feather="heart"></i>
        </p>
        <p>
          Contacta con nostros <i data-feather="message-circle"></i>
        </p>
        <br></br>
        <table>
        <tr>
          <td>Altura:</td>
          <td>40 cm</td>
        </tr>
        <tr>
          <td>Material:</td>
          <td>Felpa</td>
        </tr>
        <tr>
            <td>Hipoalergénico:</td>
            <td>Si</td>
        </tr>
        <tr>
            <td>Peso:</td>
            <td>150g</td>
        </tr>
        <tr>
            <td>Altura:</td>
            <td>22 cm</td>
        </tr>
        <tr>
            <td>Anchura:</td>
            <td>10 cm</td>
        </tr>
      </table>
    </main>;
}

export default Main;