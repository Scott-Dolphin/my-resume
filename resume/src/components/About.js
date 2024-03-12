import '../App.css'

function About({ anchor }) {
    return (
        <div className="Section" id={anchor}>
            <h1>About Me</h1>
            <h3>
                A resourceful and solution-oriented Computer Science student who is seeking a challenging
                and rewarding internship that will allow me hone my craft and learn from experienced
                developers. Proficient in various programming languages with experience in front-end
                web engineering and Python.
            </h3>
            <h2>Hobbies and interests</h2>
            <ul>
                <li>Computers</li>
                <li>Keyboards</li>
                <li>Music</li>
                <li>Outdoors</li>
                <li>Hiking</li>
                <li>Cars</li>
                <li>Food</li>
                <li>Travel</li>
            </ul>

        </div>
    )
}

export default About;