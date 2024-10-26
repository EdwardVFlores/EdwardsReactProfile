import react from "react";
import "./projects.css"
import PrimaryButton from "../common/primary-button/primary-button";
import Card from "../common/card/card";
import pokedexImage from '../../images/pokedex_pikachu.png';
import triviaImage from '../../images/EdwardsTrivia.png'
import websiteImage from '../../images/website.png'

const Projects = () => {
    
    return (
        <div id="projects" className="projects-container-holder">
            <div className="projects-container">
                <h3 className="projects-title">Projects</h3>
                <div className="projects-button-container">
                    <Card title="Pokedex" date="10/26/2024" description="A pokemon pokedex that reads from an external pokemon API" projectLink="https://h7ehdp.mimo.run/" image={pokedexImage}/>
                    <Card title="Edwards Trivia" date="10/26/2024" description="A set of 6 questions to get to know more about Edward Flores." projectLink="https://2386j7.mimo.run/" image={triviaImage}/>
                    <Card title="Edwards Website" date="10/26/2024" description="The website your seeing right now!" projectLink="https://edwardvflores.github.io/EdwardsReactProfile/" codeLink="https://github.com/EdwardVFlores/EdwardsReactProfile" image={websiteImage}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;