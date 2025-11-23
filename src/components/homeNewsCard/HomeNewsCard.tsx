import './HomeNewsCard.scss';

export default function HomeNewsCard({imageUrl, title}: {imageUrl?: string, title?: string, description?: string}) {
  return (
    <div className='homeNews__card'>
        <img src={imageUrl} alt="" />
        <div className="homeNews__card-info">
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

