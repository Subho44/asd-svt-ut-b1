import React from 'react'

const About = () => {

    const details = [
        { id: 1, name: "virat kohli", team: "india" },
        { id: 1, name: "virat kohli", team: "india" },
        { id: 1, name: "virat kohli", team: "india" },
        { id: 1, name: "virat kohli", team: "india" },
    ];
    return <>
    
        {
            details.map(x => (
                <ul>
                    <li>{x.id}</li>
                    <li>{x.name}</li>
                    <li>{x.team }</li>
              </ul>
          ))  

        }
    
    </>
}

export default About