import React from 'react';
import { Image } from 'antd';
import './product.css'
const alt = 'JIEI(THAILAND).CO.,LTD'
const Product: React.FC = () => (
    <div >

        <div className="box-topic-pro">
            <div className="box-topic-pro-box">
                <h1 className='IntroductionPro'>Product Introduction</h1>
            </div>
        </div>
        <div className="image-product-box">

            <div className="img-product_4">
                <Image className='img-product'
                    alt={alt}
                    src="/product1.png"
                    preview={{
                        src: '/product1_1.jpg',
                    }}
                />
            </div>

            <div className="img-product_4">
                <Image className='img-product'
                    alt={alt}
                    src="/product2.png"
                    preview={{
                        src: '/product2_1.jpg',
                    }}
                />
            </div>

            <div className="img-product_4">
                <Image className='img-product'
                    alt={alt}

                    src="/product3.png"
                    preview={{
                        src: '/product3_1.jpg',
                    }}
                />
            </div>

            <div className="img-product_4">
                <Image className='img-product'
                    alt={alt}
                    src="/product4.png"
                    preview={{
                        src: '/product4_1.jpg',
                    }}
                />
            </div>

        </div>
    </div>

);

export default Product;