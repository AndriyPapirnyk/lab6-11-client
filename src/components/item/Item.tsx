import { useParams, useNavigate } from "react-router-dom";
import { useCars, type Car } from "../../context/CarsContext";
import PrimaryButton from "../ui/PrimaryButton";
import Spinner from "../ui/Spinner/Spinner";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import './item.scss';

export default function Item() {
    const { id } = useParams<{ id: string }>();
    const { getCarById } = useCars();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [car, setCar] = useState<Car | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getCarById(id).then(data => {
                setCar(data);
                setIsLoading(false);
            });
        }
    }, [id]);

    const handleAddToCart = () => {
        if (car) {
            dispatch(addToCart(car));
            navigate('/cart');
        }
    };

    if (isLoading) return <Spinner />;
    if (!car) return <div>Car not found</div>;

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
                    {car.description}
                </p>

                <div className="item-page__actions">
                    <h2 className="item-page__price">Price: ${car.price.toLocaleString()}</h2>
                    <div className="item-page__buttons">
                        <div onClick={() => navigate(-1)}>
                             <PrimaryButton type={1} text="Go back" />
                        </div>
                        <div onClick={handleAddToCart}>
                            <PrimaryButton type={1} text="Add to cart" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}