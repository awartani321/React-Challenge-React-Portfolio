import './Portfolio.css';

import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import Project from './Project';

function Portfolio() {
    const projects = [
        {
            'title': 'Budet Tracker',
            'image': p1,
            'link': 'https://budget-tracker-adam12.herokuapp.com/',
            'github': 'https://github.com/awartani321/Budget-Tracker'
        },
        {
            'title': '5 Day Forecast',
            'image': p2,
            'link': 'https://awartani321.github.io/5-day-weather-app/',
            'github': 'https://github.com/awartani321/5-day-weather-app.git'
        },
        {
            'title': '5 Day Forecast',
            'image': p2,
            'link': 'https://awartani321.github.io/5-day-weather-app/',
            'github': 'https://github.com/awartani321/5-day-weather-app.git'
        },
        {
            'title': 'Note Taker',
            'image': p3,
            'link': 'https://note-taker-adam-awart.herokuapp.com/',
            'github': 'https://github.com/awartani321/Note-Taker'
        }

    ]

    return (
        <div className="portfolio-container">
            <div className="row">
                {
                    projects.map(item => (
                        <Project key={item.title} project={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;