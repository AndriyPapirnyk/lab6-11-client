import { useState } from 'react';
import HomeNewsCard from '../homeNewsCard/HomeNewsCard';
import PrimaryButton from '../ui/PrimaryButton';
import './HomeNews.scss';

export default function HomeNews() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='homeNews'>
        <h2>New cars upcoming!</h2>
        <div className="homeNews__list">
            <HomeNewsCard imageUrl={"https://pngimg.com/d/mercedes_PNG80146.png"} title={'Mercedes c63'} />
            <HomeNewsCard imageUrl={"https://pngimg.com/d/bmw_PNG99543.png"} title={'BMW m2'} />
            <HomeNewsCard imageUrl={"https://pngimg.com/d/porsche_PNG102845.png"} title={'Porsche 911'} />
            
            {showAll && (
                <>
                    <HomeNewsCard imageUrl={"https://pngimg.com/d/mercedes_PNG80146.png"} title={'Random Extra Car 1'} />
                    <HomeNewsCard imageUrl={"https://pngimg.com/d/bmw_PNG99543.png"} title={'Random Extra Car 2'} />
                    <HomeNewsCard imageUrl={"https://pngimg.com/d/porsche_PNG102845.png"} title={'Random Extra Car 3'} />
                </>
            )}
        </div>
        
        <div onClick={() => setShowAll(!showAll)}>
            <PrimaryButton type={2} text={showAll ? 'View less' : 'View more'} />
        </div>
    </div>
  )
}