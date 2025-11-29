import { useState, useEffect } from 'react';
import { useCars } from '../../context/CarsContext';
import CatalogList from '../CatalogList/CatalogList';
import CatalogFilters from '../catalogFilters/CatalogFilters';
import Spinner from '../ui/Spinner/Spinner';
import './Catalog.scss';

export default function Catalog() {
  const { cars, loading, getCars } = useCars();
  
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const filters: any = {};

    if (selectedType) filters.type = selectedType;
    if (searchTerm) filters.search = searchTerm;
    
    if (selectedPrice) {
        if (selectedPrice.includes('+')) {
            filters.minPrice = 100000;
        } else {
            const [min, max] = selectedPrice.split('-');
            filters.minPrice = min;
            filters.maxPrice = max;
        }
    }

    const delayDebounceFn = setTimeout(() => {
        getCars(filters);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedType, selectedPrice, searchTerm]);

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
        {loading ? <Spinner /> : <CatalogList cars={cars} />}
    </section>
  )
}