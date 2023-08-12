import '../styles/home.scss'
import imageInRectangle from '../assets/Image source 1.png';
import Cards from '../components/cards';
function Home() {
    return (
        <div>
            <div className="rectangle-container">
                <img src={imageInRectangle} alt="Image dans le rectangle" className="image-in-rectangle" />
                <span className="overlay-text">Chez vous, partout et ailleurs</span>
            </div>
            <Cards />
        </div>
    )
}

export default Home;


