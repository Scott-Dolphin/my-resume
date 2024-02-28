import '../App.css'
import tako from '../img/tako.jpg'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="NameCard">
                <img src={tako} alt="me"></img>
                <h1>Nathan Chen</h1>
            </div>
            <div className="Links">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;