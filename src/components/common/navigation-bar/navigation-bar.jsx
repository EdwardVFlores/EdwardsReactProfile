import "./navigation-bar.css"

const NavigationBar = () => {

    return (
        <div className="navigation-bar-container-holder">
            <div className="navigation-bar-container">
                <nav id="navigation">
                    <a href="About Me">About Me</a>
                    <a href="Socials">Socials</a>
                    <a href="Projects">Projects</a>
                    <a href="Contact Me">Contact Me</a>
                </nav>
            </div>
        </div>
    )
}

export default NavigationBar;