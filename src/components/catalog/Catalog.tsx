import CatalogList from '../CatalogList/CatalogList';
import CatalogFilters from '../catalogFilters/CatalogFilters';
import './Catalog.scss';

export default function Catalog() {
  return (
    <section className='catalog'>
        <CatalogFilters />
        <CatalogList />
    </section>
  )
}
