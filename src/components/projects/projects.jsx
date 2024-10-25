import react from "react";
import "./projects.css"
import PrimaryButton from "../common/primary-button/primary-button";

const Projects = () => {
    
    return (
        <div id="projects" className="projects-container-holder">
            <div className="projects-container">
                <h3 className="projects-title">Projects</h3>
                <div className="projects-button-container">
                    <PrimaryButton text="Pokedex" link="https://h7ehdp.mimo.run/"/>
                    <PrimaryButton text="Edwards Trivia" link="https://2386j7.mimo.run/"/>
                    <PrimaryButton text="Camera Tips" link="https://jgkd0c.mimo.run/"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;