import PrimaryButton from "../ui/PrimaryButton";
import Select, { type Option } from "../ui/Select";
import "./CatalogFilters.scss";

interface CatalogFiltersProps {
    selectedType: string;
    setSelectedType: (val: string) => void;
    selectedPrice: string;
    setSelectedPrice: (val: string) => void;
    searchTerm: string;
    setSearchTerm: (val: string) => void;
}

export default function CatalogFilters({
    selectedType,
    setSelectedType,
    selectedPrice,
    setSelectedPrice,
    searchTerm,
    setSearchTerm
}: CatalogFiltersProps) {

    const carTypes: Option[] = [
        { value: "suv", label: "SUV" },
        { value: "coupe", label: "Coupe" },
        { value: "sedan", label: "Sedan" },
    ];

    const priceCategories: Option[] = [
        { value: "0-20000", label: "Up to $20,000" },
        { value: "20000-50000", label: "$20,000 – $50,000" },
        { value: "50000-100000", label: "$50,000 – $100,000" },
        { value: "100000+", label: "$100,000+" },
    ];

    const handleApply = () => {
        console.log("Filters applied (logic is essentially reactive in this implementation)");
    };

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
                    <input 
                        type="text" 
                        placeholder="Enter car name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div onClick={handleApply}>
                 <PrimaryButton type={2} text="Apply"/>
            </div>
        </div>
    );
}