import type { Car } from "../../context/CarsContext";
import CatalogListCard from "../catalogListCard/CatalogListCard";
import "./CatalogList.scss";

export default function CatalogList({ cars }: { cars: Car[] }) {
    
    if (cars.length === 0) {
        return <div style={{padding: 20}}>No cars found matching your criteria.</div>
    }

    return (
        <div className="catalog__list">
            {cars.map((car) => (
                <CatalogListCard
                    key={car.id}
                    id={car.id} 
                    name={car.name}
                    image={car.image}
                    description={car.description}
                    price={car.price}
                />
            ))}
        </div>
    );
}