import { Carousel } from "react-responsive-carousel";

const Main = () => {
    return <main>
        <Carousel>
        <div>
          <img src="https://i.etsystatic.com/24163036/r/il/ac5a89/4668936625/il_570xN.4668936625_skua.jpg" alt="Pepinillo Rick1"/>
        </div>
        <div>
          {<img src="https://m.media-amazon.com/images/I/613wIz9vlHL.jpg" alt="Pepinillo Rick2"/>}
        </div>
        <div>
          {<img src="https://http2.mlstatic.com/D_NQ_NP_656692-CBT75637665809_042024-O.webp" alt="Pepinillo Rick3"/>}
        </div>
        <div>
          {<img src="https://m.media-amazon.com/images/I/61t2-U6cAWL.jpg" alt="Pepinillo Rick4"/>}
        </div>
        <div>
          {<img src="https://i.etsystatic.com/24163036/r/il/efa407/4620693818/il_570xN.4620693818_i9du.jpg" alt="Pepinillo Rick5"/>}
        </div>
        <div>
          {<img src="https://m.media-amazon.com/images/I/711fwUVvb3L.jpg" alt="Pepinillo Rick6"/>}
        </div>
        </Carousel>

        <h1>
            ¡¡¡Pepinillo Rick!!!
        </h1>
        <p>
            ¡Lleva a casa la locura de Rick y Morty con nuestros peluches de Pepinillo Rick! Suaves, adorables y llenos de personalidad, estos peluches son el regalo perfecto para cualquier fan. ¡Hazte con el tuyo y lleva un trozo del universo de Rick y Morty a casa hoy mismo!
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