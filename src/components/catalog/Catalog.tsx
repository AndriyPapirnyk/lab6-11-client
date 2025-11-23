import { useState } from 'react';
import { useCars } from '../../context/CarsContext';
import CatalogList from '../CatalogList/CatalogList';
import CatalogFilters from '../catalogFilters/CatalogFilters';
import './Catalog.scss';

export default function Catalog() {
  const { cars } = useCars();
  
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCars = cars.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType ? car.type === selectedType : true;

      let matchesPrice = true;
      if (selectedPrice) {
          const [min, max] = selectedPrice.split('-').map(Number);
          if (selectedPrice.includes('+')) {
             matchesPrice = car.price >= 100000;
          } else {
             matchesPrice = car.price >= min && car.price <= max;
          }
      }

      return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <section className='catalog'>
        <CatalogFilters 
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
        />
        <CatalogList cars={filteredCars} />
    </section>
  )
}