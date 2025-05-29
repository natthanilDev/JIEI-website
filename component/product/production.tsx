import './product.css'
import Image from "next/image";
import car1 from '../../public/imgcar1.jpg'
import car2 from '../../public/imgcar2.jpg'

import b1 from '../../public/b1.jpg'
import b2 from '../../public/b2.jpg'
import b3 from '../../public/b3.jpg'


export default function production() {
  const jiei = 'JIEI(THAILAND).CO.,LTD'
  return (
    <div>
      <div className="ProductSample">
        <h1>Product sample</h1>
      </div>
      <div className="car-product-box">
        <div className="intro-car-product">
          <div className="carproduct">
            <Image src={car1} alt={jiei} priority />
          </div>
        </div>

        <div className="intro-car-product">
          <div className="carproduct">
            <Image src={car2} alt={jiei} priority />
          </div>
        </div>
      </div>
      <div className="ProductSample">
        <h1>Functional evaluation</h1>
      </div>
      <div className="container-image-product">
        <div className="image-Functional-evaluation">
          <div className="image-box">
            <Image src={b1} alt={jiei} priority />
          </div>
          <div className="content-hover-box">
            <p>Door Seals</p>
          </div>
        </div>
        <div className="image-Functional-evaluation">
          <div className="image-box">
            <Image src={b2} alt={jiei} priority />
          </div>
          <div className="content-hover-box">
            <p>Air Intake Seals</p>
          </div>
        </div>
        <div className="image-Functional-evaluation">
          <div className="image-box">
            <Image src={b3} alt={jiei} priority />
          </div>
          <div className="content-hover-box">
            <p>Weather Strips</p>
          </div>
        </div>
      </div>
    </div>
  )
}
