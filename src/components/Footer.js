import React from 'react';

const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className="social-media-bar" onClick={() => window.open("https://github.com/Brixsta", "_blank")}>
                <div className="social-media-box">
                    <i class="fab fa-github"></i>
                </div>
                <div className="social-media-box" onClick={() => window.open("https://www.youtube.com/channel/UCSbSnlykuqApwsDJzGo5RNA", "_blank")}>
                    <i class="fab fa-youtube"></i>
                </div>
                <div className="social-media-box" onClick={() => window.open("https://linkedin.com/in/charles-brixey-53144680/", "_blank")}>
                    <i class="fab fa-linkedin"></i>
                </div>
                <div className="social-media-box" onClick={() => window.open("mailto:Brixsta@gmail.com", "_blank")}>
                    <i class="fas fa-envelope-open"></i>
                </div>
            </div>
        </footer>
    );
}


export default Footer;