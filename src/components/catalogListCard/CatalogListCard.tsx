import PrimaryButton from "../ui/PrimaryButton";
import "./CatalogListCard.scss";

interface CatalogListCardProps {
    name: string;
    image: string;
    description: string;
    price: number;
}

export default function CatalogListCard({
    name,
    image,
    description,
    price,
}: CatalogListCardProps) {
    return (
        <div className="catalogList__card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="catalogList__card-price">
                <h3>Price:</h3>
                <span>${price.toLocaleString()}</span>
            </div>
            <PrimaryButton type={1} text="View more" />
        </div>
    );
}
