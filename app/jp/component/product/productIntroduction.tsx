'use client'
import Image from "next/image"
import '../../../en/component/product/product.css'
import ji1 from '../../../../public/ji1.jpg'
import ji2 from '../../../../public/ji2.jpg'
import ji3 from '../../../../public/ji3.jpg'
import ji4 from '../../../../public/ji4.jpg'

export default function productIntroduction() {

  const click1 = ()=>{
    window.open('/ji1_1.jpg' , '_blank')
  }
   const click2 = ()=>{
    window.open('/ji2_2.jpg' , '_blank')
  }
   const click3 = ()=>{
    window.open('/ji3_3.jpg' , '_blank')
  }
   const click4 = ()=>{
    window.open('/ji4_4.jpg' , '_blank')
  }
  return (
    <div>
      <div className="box-topic-pro">
        <div className="box-topic-pro-box">
          <h1 className='Introduction'>開発技術紹介</h1>
        </div>

      </div>
      <div className="container-product">
        <div className="product-card-box">
          <div className="box-product" onClick={click1}>
            <div className="product-card">
              <Image src={ji1} className="image-product-1" alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
            <div className="text-product">
              自動車部品
            </div>
          </div>

          <div className="box-product" onClick={click2}>
            <div className="product-card">
              <Image src={ji2} className="image-product-1" alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
            <div className="text-product">
              特殊用途車両部品
            </div>
          </div>


          <div className="box-product" onClick={click3}>
            <div className="product-card">
              <Image src={ji3} className="image-product-1" alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
            <div className="text-product">
              建設機械
            </div>
          </div>

          <div className="box-product" onClick={click4}>
            <div className="product-card">
              <Image src={ji4} className="image-product-1" alt="JIEI(THAILAND).CO.,LTD" priority />
            </div>
            <div className="text-product">
              建築資材
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
