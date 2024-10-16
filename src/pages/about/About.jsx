import { AboutWrap } from './AboutStyle';

const About = () => {
    return (
        <AboutWrap>
            <div className="videoDiv">
                <video autoPlay muted loop className="backgroundVideo">
                    <source src="/images/Officia.mp4" type="video/mp4" />
                </video>
                <div className="inner">
                    {/* <h2 className="firstHeading">if you need a car ?</h2>
                    <h2 className="secondHeading">what is your best point 5 ? </h2> */}
                </div>
            </div>
        </AboutWrap>
    );
};

export default About;
