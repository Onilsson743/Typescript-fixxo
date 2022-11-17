import Products from '../../data/products/products.json'
import ProductCardHorizontal from '../smallComponents/ProductCardHorizontal'

const SortedProductsSection = () => {

    const latestProducts = Products.slice(0,3)
    const bestSellingProducts = Products.slice(3,6)
    const topReactedProducts = Products.slice(6,9)

    return (
        <div className='_center'>
            <div className='_containersmall sortedproductsection'>
                <div className='row'>
                    <h4>Latest Products</h4>
                    {
                        latestProducts.map(latestProducts => <ProductCardHorizontal key={latestProducts.articleNumber} item={latestProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Best Selling Products</h4>
                    {
                        bestSellingProducts.map(bestSellingProducts => <ProductCardHorizontal key={bestSellingProducts.articleNumber} item={bestSellingProducts} />)
                    }
                    
                </div>
                <div className='row'>
                    <h4>Top Reacted Products</h4>
                    {
                        topReactedProducts.map(topReactedProducts => <ProductCardHorizontal key={topReactedProducts.articleNumber} item={topReactedProducts} />)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default SortedProductsSection