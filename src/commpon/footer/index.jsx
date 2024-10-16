import { Link } from 'react-router-dom';
import { FooterWrap } from './style';

const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                <ul className="info">
                    <li>
                        <Link to={'/financials'}>Financials</Link>
                    </li>
                    <li>
                        <Link to={'/contactUs'}>ContactUs</Link>
                    </li>
                    <li>
                        <Link to={'/careers'}>Careers</Link>
                    </li>
                </ul>

                <ul className="family">
                    <li>
                        <Link to={'https://www.instagram.com/lamborghini/?hl=en'} target="blank">
                            <img src="/images/brandIcon/instagram.png" alt="insta" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.threads.net/@lamborghini'} target="blank">
                            <img src="/images/brandIcon/thread.png" alt="thread" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.facebook.com/Lamborghini/'} target="blank">
                            <img src="/images/brandIcon/facebook.png" alt="facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw'} target="blank">
                            <img src="/images/brandIcon/youtube.png" alt="youtube" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://x.com/Lamborghini'} target="blank">
                            <img src="/images/brandIcon/X.png" alt="X" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.tiktok.com/@lamborghini?lang=en'} target="blank">
                            <img src="/images/brandIcon/tiktok.png" alt="tiktok" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.linkedin.com/company/automobili-lamborghini-s-p-a-'} target="blank">
                            <img src="/images/brandIcon/linkedin.png" alt="linkedin" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://discord.com/invite/vet6ZBjpFd'} target="blank">
                            <img src="/images/brandIcon/discord.png" alt="discord" />
                        </Link>
                    </li>
                </ul>
            </div>
        </FooterWrap>
    );
};

export default Footer;
