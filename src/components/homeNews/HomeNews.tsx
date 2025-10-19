import HomeNewsCard from '../homeNewsCard/HomeNewsCard';
import PrimaryButton from '../ui/PrimaryButton';
import './HomeNews.scss';

export default function HomeNews() {
  return (
    <div className='homeNews'>
        <h2>New cars upcomming!</h2>
        <div className="homeNews__list">
            <HomeNewsCard imageUrl={"https://pngimg.com/d/mercedes_PNG80146.png"} title={'Mercedes c63'} />
            <HomeNewsCard imageUrl={"https://pngimg.com/d/bmw_PNG99543.png"} title={'BMW m2'} />
            <HomeNewsCard imageUrl={"https://pngimg.com/d/porsche_PNG102845.png"} title={'Porsche 911'} />
        </div>
        <PrimaryButton type={2} text={'Wiew more'} />
    </div>
  )
}
