import Product from "@/app/en/component/product/productIntroduction";
import Production from "@/app/en/component/product/production";
import Productlist from "@/app/en/component/product/productlist";


export default function Page() {


    return (
        <div>
            <Product />
            <Productlist />
            <Production />
        </div>
    );
}
