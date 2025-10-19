import './Footer.scss';
import logoUrl from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__info">
            <h2>WheelWay</h2>
            <img src={logoUrl} alt="" />
            <div className="footer__info-socials">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                </a>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Instagram-Logo-Round-Color.png" alt="" />
                </a>
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png" alt="" />
                </a>
            </div>
        </div>
        <div className='footer__line'></div>
        <p>© 2025 CarStore. All rights reserved.</p>
    </footer>
  )
}
