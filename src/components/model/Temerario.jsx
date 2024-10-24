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
            <div className="step01">
                <video autoPlay muted loop className="backgroundVideo">
                    <source src="./images/Temerario.mp4" type="video/mp4" />
                </video>
                <div className="content">
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
            <div className="step02">
                <div className="left">
                    <img src="./images/models/temerario/temerario_01.jpg" alt="temerario_01" />
                </div>
                <div className="right">
                    <h3>AUGMENTED REALITY</h3>
                    <p>Frame the QR code with your smartphone and turn on the Lamborghini Augmented Reality experience.</p>
                    <img src="./images/models/temerario/temerario_QR.png" alt="temerario_QR" />
                </div>
            </div>
            <div className="step03">
                <div className="left">
                    <h3>OVERVIEW</h3>
                    <p>
                        Lamborghini introduces Temerario, the first super sports car in the history of the Sant’Agata Bolognese-based brand
                        to be equipped with a V8 twin-turbo engine paired with three electric motors, with an overall maximum power of 920
                        CV. It is the second vehicle in the HPEV (High Performance Electrified Vehicle) range, at the top in terms of
                        driving pleasure thanks to its performance and comfort, unique in its category. It features new design style
                        concepts, while offering unprecedented customization options and connectivity content never seen before.
                    </p>
                </div>
                <div className="right">
                    <img src="./images/models/temerario/temerario_02.jpg" alt="temerario_02" />
                </div>
            </div>
            <div className="step04">
                <div className="left">
                    <h3>EXTERIOR</h3>
                    <p>
                        Temerario is a milestone in Lamborghini design, combining an unmistakable character with lines that pay tribute to
                        iconic models of the brand. The exterior is characterized by a new stylistic feature, the signature hexagon-shaped
                        daytime running lights, which recall one of Lamborghini’s traditional geometric shapes with a futuristic context.
                        Also unmistakable is the exposed engine, the heart of the vehicle, framed by a new spoiler that combines function
                        and beauty and plays a fundamental role in aerodynamic efficiency.
                    </p>
                </div>
                <div className="right">
                    <img src="./images/models/temerario/temerario_03.jpg" alt="temerario_03" />
                </div>
            </div>
            <div className="step05">
                <div className="left">
                    <img src="./images/models/temerario/temerario_04.jpg" alt="temerario_04" />
                </div>
                <div className="right">
                    <img src="./images/models/temerario/temerario_05.jpg" alt="temerario_05" />
                </div>
            </div>
        </TemerarioWrap>
    );
};

export default Temerario;
