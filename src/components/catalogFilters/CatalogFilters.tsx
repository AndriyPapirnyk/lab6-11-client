import { useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import Select, { type Option } from "../ui/Select";
import "./CatalogFilters.scss";

export default function CatalogFilters() {
    const [selectedType, setSelectedType] = useState<string>("");
    const [selectedPrice, setSelectedPrice] = useState<string>("");

    const carTypes: Option[] = [
        { value: "suv", label: "SUV" },
        { value: "coupe", label: "Coupe" },
        { value: "sedan", label: "Sedan" },
        { value: "hatchback", label: "Hatchback" },
        { value: "pickup", label: "Pickup" },
    ];

    const priceCategories: Option[] = [
        { value: "0-20000", label: "Up to $20,000" },
        { value: "20000-50000", label: "$20,000 – $50,000" },
        { value: "50000-100000", label: "$50,000 – $100,000" },
        { value: "100000+", label: "$100,000+" },
    ];


    return (
        <div className="catalog__filter">
            <div className="catalog__filter-options">
                <Select
                    label="Car type"
                    options={carTypes}
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                />
                <Select
                    label="Price range"
                    options={priceCategories}
                    value={selectedPrice}
                    onChange={(e) => setSelectedPrice(e.target.value)}
                />
                <div className="input__group">
                    <label>Car name</label>
                    <input type="text" placeholder="Enter car name..."/>
                </div>
            </div>
            <PrimaryButton type={2} text="Apply"/>
        </div>
    );
}
