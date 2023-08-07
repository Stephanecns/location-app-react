import '../styles/home.scss'
import imageInRectangle from '../assets/Image source 1.png';

function Home() {
    return (
        <div className="rectangle-container">
            <img src={imageInRectangle} alt="Image dans le rectangle" className="image-in-rectangle" />
            <span className="overlay-text">Chez vous, partout et ailleurs</span>
        </div>
    )
}
export default Home;


