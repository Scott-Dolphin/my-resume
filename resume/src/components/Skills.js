import '../App.css'
import Bookshelf from './nano/Bookshelf.js'

function Skills({ anchor }) {
    return (
        <div className="Section" id={anchor}>
            <h1>My Skills</h1>
            <Bookshelf t="test"/>
            
        </div>
    )
}

export default Skills;