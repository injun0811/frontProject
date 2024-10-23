import { useState } from 'react';
import ModelCategory from './modelCategory';
import { TemerarioWrap } from './ModelStyle';

const Temerario = () => {
    const [isHovered, setIsHovered] = useState(false);
    document.addEventListener('DOMContentLoaded', function () {
        const leftSide = document.getElementById('leftSide');
        const hexagonImage = document.getElementById('hexagonImage');

        leftSide.addEventListener('mouseenter', function () {
            hexagonImage.src = '/images/hexagon_black.gif';
        });

        leftSide.addEventListener('mouseleave', function () {
            hexagonImage.src = '/images/hexagon_yellow.gif';
        });
    });
    return (
        <TemerarioWrap>
            <ModelCategory />
            <div className="videoDiv">
                <video autoPlay muted loop className="backgroundVideo">
                    <source src="./images/Temerario.mp4" type="video/mp4" />
                </video>
                <div className="inner">
                    <h3 className="firstHeading">TEMERARIO</h3>
                    <h3 className="secondHeading">YOU CAN'T HIDE WHO YOU ARE</h3>
                    <div className="underInfo">
                        <div>
                            <article>MAX POWER (combined ICE+EE)</article>
                            <p>920 CV</p>
                        </div>
                        <div>
                            <article>MAX. SPEED</article>
                            <p>343 km/h</p>
                        </div>
                        <div>
                            <article>0-100 km/h</article>
                            <p>2.7 s</p>
                        </div>

                        <div className="leftSide" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <img src={isHovered ? '/images/hexagon_yellow.gif' : '/images/hexagon_black.gif'} alt="hexagon" />
                            <div>
                                <article>CONFIGURATOR</article>
                                <p>Create your Temerario</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TemerarioWrap>
    );
};

export default Temerario;
