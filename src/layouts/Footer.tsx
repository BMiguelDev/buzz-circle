import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

interface PropTypes {
    className?: string;
}

const Footer = ({ className }: PropTypes) => {
    const date = new Date();
    let currentYear = date.getFullYear();

    return (
        <footer className={className}>
            <div className="footer_text">
                <p>Copyright © {currentYear} Bruno Miguel</p>
            </div>
            <div className="footer_icon_container">
                    <a href="https://github.com/BMiguelDev/buzz-circle" target="_blank" rel="noreferrer" aria-label="Check the app's code">
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                    <a href="https://bmigueldev.github.io/brunomiguel" target="_blank" rel="noreferrer" aria-label="Bruno Miguel">
                        <FontAwesomeIcon icon={faDesktop} />
                    </a>
                    <a href="https://github.com/BMiguelDev" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/miguel--bruno/" target="_blank" rel="noreferrer" aria-label="Github Profile">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
        </footer>
    );
}

export default Footer;
