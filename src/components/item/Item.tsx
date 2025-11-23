import { useParams, useNavigate } from "react-router-dom";
import { useCars } from "../../context/CarsContext";
import PrimaryButton from "../ui/PrimaryButton";
import './item.scss';

export default function Item() {
    const { id } = useParams<{ id: string }>();
    const { cars } = useCars();
    const navigate = useNavigate();
    const car = cars.find((c) => c.id === Number(id));

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <section className="item-page">
            <div className="item-page__image">
                <img src={car.image} alt={car.name} />
            </div>

            <div className="item-page__info">
                <div className="item-page__tags">
                    <span className="item-page__tag item-page__tag--type">
                        Type: {car.type}
                    </span>
                    <span className="item-page__tag item-page__tag--stock">
                        In Stock
                    </span>
                </div>

                <h1 className="item-page__title">{car.name}</h1>
                
                <p className="item-page__description">
                    {car.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.
                </p>

                <div className="item-page__actions">
                    <h2 className="item-page__price">Price: ${car.price.toLocaleString()}</h2>
                    <div className="item-page__buttons">
                        <div onClick={() => navigate(-1)}>
                             <PrimaryButton type={1} text="Go back" />
                        </div>
                        <PrimaryButton type={1} text="Add to cart" />
                    </div>
                </div>
            </div>
        </section>
    );
}