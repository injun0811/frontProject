import { AboutWrap, MainWrap } from './style';

import Content1 from '../../components/main/Content1';
import Content2 from '../../components/main/Content2';

const Main = () => {
    return (
        <>
            <AboutWrap>
                <div className="videoDiv">
                    <video autoPlay muted loop className="backgroundVideo">
                        <source src="./images/Officia.mp4" type="video/mp4" />
                    </video>
                    <div className="inner">
                        <h3 className="firstHeading">Want to surpassing the limits of speed?</h3>
                        <h3 className="secondHeading">Discover an artistic masterpiece beyond a simple car.</h3>
                    </div>
                </div>
            </AboutWrap>
            <MainWrap>
                <Content1 />
                <Content2 />
            </MainWrap>
        </>
    );
};

export default Main;
