import '../styles/about.scss'
import imageInRectangle from '../assets/Image source 2.png';
function About() {
    return (
        <div className="rectangle-container">
            <img src={imageInRectangle} alt="Image dans le rectangle" className="image-in-rectangle" />

        </div>
    )
}
export default About