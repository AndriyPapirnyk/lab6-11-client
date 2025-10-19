import CatalogListCard from "../catalogListCard/CatalogListCard";
import "./CatalogList.scss";

export default function CatalogList() {
    const cars = [
        {
            id: 1,
            name: "Mercedes S63",
            image: "https://pngimg.com/d/mercedes_PNG80146.png",
            description:
            'The Mercedes S63 combines elegant design with powerful performance, offering a driving experience that blends luxury, comfort, and speed.',
            price: 95000,
        },
        {
            id: 2,
            name: "BMW M4 Coupe",
            image: "https://www.lloydmotorgroup.com/ImageLibrary/images/BMW/Retail/Master/New%20Cars/M%20Cars/M4%20Coupe%20Gallery/BMW-G82-M4-Tanzanite-Blue-thmub.png",
            description:
            'The BMW M4 delivers precise handling and thrilling acceleration, designed for drivers who appreciate power and refined craftsmanship.',
            price: 78000,
        },
        {
            id: 3,
            name: "Audi Q7",
            image: "https://www.freeiconspng.com/uploads/audi-q7-car-png-image-black-jeep-2.png",
            description:
            'The Audi Q7 blends dynamic performance with modern design, featuring advanced technology and exceptional comfort',
            price: 65000,
        },
    ];

    return (
        <div className="catalog__list">
            {cars.map((car) => (
                <CatalogListCard
                    key={car.id}
                    name={car.name}
                    image={car.image}
                    description={car.description}
                    price={car.price}
                />
            ))}
        </div>
    );
}
