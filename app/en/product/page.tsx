import ProductList from '../component/product/productlist'
import Product from "../component/product/product";
import '../component/product/product.css'
export default function Page() {


    return (
        <div >
            <Product />
            <ProductList />
            
        </div>
    );
}
