'use client';
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
const { Meta } = Card;
const jiei = 'JIEI(THAILAND).CO.,LTD'
const App: React.FC = () => (
  <div className='product-list-PD'>
    <h1 className='title-car'>CAR</h1>


    <Card>
      <h1 className='title-list'>Door Parts</h1>
      <Card type="inner" title="Door Seal" className='card-PD'>
        Parts are evaluated for waterproofing, sound insulating, and door closing properties in addition to design.
      </Card>

      <Card style={{ marginTop: 16 }} className='card-PD' type="inner" title="Door Opnening Trim">
        This is a sealing material that is used between a door
        and the peripheral edge of the door opening.
        It has excellent waterproofing, sound insulating,
        and door closing properties. Moreover, it is also lightweight.
      </Card>

      <Card type="inner" className='card-PD' title="Door Lower Seal" >
        It effectively prevents the entry of water, mud, and sand. Additionally, it also has excellent sound insulation and weight reduction properties.
      </Card>

      <Card type="inner" className='card-PD' title="Back Door Weatherstrip" >
        This is a sealing material for back doors. It has excellent
        waterproofing, sound insulating, and door closing properties.
        Moreover, it is also very lightweight.
      </Card>

      <h1 style={{ marginTop: 30 }} className='topic-PD' >Engine Room Parts</h1>
      <Card type="inner" className='card-PD' title="Hoodseal Front" >
        By improving the cross-section of the seal without
        altering the structure of the engine room&apos;s front end,
        it prevents interference with the protruding portion on
        the upper surface of the engine room&apos;s front end. It also
        conforms to regulations concerning external protrusions.
      </Card>

      <Card type="inner" className='card-PD' title="Bhd Lower Seal" >
        Gaps through which air from the radiator flows into the engine room are secured by making cross sectional adjustments.
      </Card>

      <Card type="inner" className='card-PD' title="Hoodseal Rear" >
        It helps reduce vehicular weight by eliminating the need for metal cores in cushioning material between the bonnet, and the grill and trim.
      </Card>

      <Card type="inner" className='card-PD' title="Bhd Lower Seal" >
        Gaps through which air from the radiator flows into the engine room are secured by making cross sectional adjustments.
      </Card>

      <Card type="inner" className='card-PD' title="Air Intake Seal" >
        This is a sealing material that holds back warm air from within the engine room while only allowing cool air to pass.
      </Card>

      <h1 style={{ marginTop: 30 }} className='topic-PD' >Parts for Glass</h1>
      <Card type="inner" className='card-PD' title="Front Window Molding" >
        Transformed from resins into rubber materials, they have excellent lightweight, sound insulating, and aerodynamic properties.
      </Card>
      <Card type="inner" className='card-PD' title="Sky Roof Molding" >
      </Card>

      <Card type="inner" className='card-PD' title="Qtr Glass Molding" >

        It is a cushioning material that is used between the glass and body of a vehicle.
      </Card>


      <Card type="inner" className='card-PD' title="Dam Rubber" >
      </Card>


      <Card type="inner" className='card-PD' title="Dam Lip Rubber" >
      </Card>

      <h1 style={{ marginTop: 30 }} className='topic-PD' >Other Parts</h1>
      <Card type="inner" className='card-PD' title="Bamper Protector" >

        As external design characteristics must be kept in mind, we use silicon that corresponds to the vehicle&apos;s color.
      </Card>
      <Card type="inner" className='card-PD' title="Over Fender Protector" >
      </Card>

      <Card type="inner" className='card-PD' title="Wheel Arch Seal" >
        Used primarily on SUVs, the seal prevents water leakage and protects door edges from chipping.
      </Card>
      <Card type="inner" className='card-PD' title="Battery Gasket" >

        This is a gasket that is attached to the battery case of an
        electric vehicle. It has excellent waterproofing
        properties so as to prevent water seepage even when
        the lower portion of the vehicle is submerged.
      </Card>

    </Card>





    <div className='background-product'>
      <div className="ProductSample">

        <h1 className='title-car'>Product sample</h1>
      </div>
      <div className="car-product-box">
        <div className="intro-car-product">
          <div className="carproduct">
            <Image className='image-PD' src="/imgcar1.jpg" height={200} width={300} alt={jiei} priority />
          </div>
        </div>

        <div className="intro-car-product">
          <div className="carproduct">
            <Image className='image-PD' src={"/imgcar2.jpg"} height={200} width={300} alt={jiei} priority />
          </div>
        </div>
      </div>
      <div className="ProductSample">
        <h1 className='title-car'>Functional evaluation</h1>
      </div>
      <div className="container-image-product">
        <Card
          hoverable
          cover={
            <Image
              className="image-PD"
              alt={jiei}
              src="/pd1.png"
              width={300}
              height={200}
              priority
            />
          }
        >
          <Meta title="Door Seals" />
        </Card>

        <Card
          hoverable
          cover={
            <Image
              className="image-PD"
              alt={jiei}
              src="/pd2.png"
              width={300}
              height={200}
              priority
            />
          }
        >
          <Meta title="Air Intake Seals" />
        </Card>

        <Card
          hoverable
          cover={
            <Image
              className="image-PD"
              alt={jiei}
              src="/pd3.png"
              width={300}
              height={500}
              priority
            />
          }
        >
          <Meta title="Weather Strips" />
        </Card>
       
        
      </div>
    </div>
  </div>

);

export default App;