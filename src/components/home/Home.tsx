import './Home.scss';
import homeIllustration from '../../assets/home_img.webp';
import homeVector from '../../assets/vector.png';
import HomeNews from '../homeNews/HomeNews';

export default function Home() {
  return (
    <section className="home">
        <div className="home__container">
            <main className='home__main'>
                <div className="home__main-content">
                    <img className='home__illustration' src={homeIllustration} alt="home__illustration" />
                    <div className="home__main-info">
                        <h1>WheelWay</h1>
                        <p>Discover WheelWay, your source for a curated selection <br /> of quality new and pre-owned vehicles. We guarantee a <br /> transparent buying experience and competitive financing. <br /> Let our expert team help you find your dream car today.</p>
                    </div>
                </div>
                <img className='home__vector' src={homeVector} alt="" />
            </main>
            <HomeNews />
        </div>
    </section>
  )
}
