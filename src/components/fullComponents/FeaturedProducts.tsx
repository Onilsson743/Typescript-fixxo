import Products from '../../data/products/products.json'
import ProductCard from '../smallComponents/ProductCard'

const FeaturedProducts: React.FC = () => {

    const products = Products.slice(0,8)
  
    return (
      <section className='featured-products'>
          <h4>Featured Products</h4>
          <div className='grid'>
            {
              products.map(products => <ProductCard key={products.articleNumber} item={products} />)
            }
          </div>
      </section>
    )
  }
  
  export default FeaturedProducts