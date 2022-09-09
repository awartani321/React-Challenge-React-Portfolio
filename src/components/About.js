import './About.css';

import face from '../assets/face.jpg';


function About() {
    return (
        <div>
            <h2 className="title">Project Manager and Software Engineer</h2>
            <div className="photo">
                <img src={face}/>
            </div>
            <p className="desc">
                About: Hi, My name is Adam Awartani, I am an aspiring Software Engineer. I started off at UNC Chapel Hill Coding Bootcamp and have gained the skills to be able to present you with a few projects of mine. I hope you see the potential and enthusiasm within my work. Thank you for your time!
            </p>
        </div>
    )
}

export default About;