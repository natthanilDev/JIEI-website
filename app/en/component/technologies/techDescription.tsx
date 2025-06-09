'use client'
import React from 'react';
import { Divider, List } from 'antd';


const data1 = [
    {
        title: 'CAD / CATIA',
        descriptions: "We design using V5, the latest version of the CATIA 3-D CAD software."

    },
    {
        title: 'Stress Analysis',
        descriptions: "By analyzing the stresses and behaviours of products with the aid of computers, a product's performance can be accurately estimated before actually making the product."

    },
    {
        title: 'R Tracking Analysis',
        descriptions: ""

    },
    {
        title: 'Material Flow Analysis',
        descriptions: "We analyze the behaviour of materials in moulds during the injection moulding process and create simulations of material flow, pressure, contraction, and warp deformation during the filling process, allowing us to optimize mould designs to reflect those changes."
    },
    {
        title: 'Compressive Load Analysis & Contact Stress Analysis',
        descriptions: "We analyze compressive loads and contact stresses to confirm that seal performance is satisfactory."

    },
];


const data2 = [
    {
        title: 'Test roll',
        descriptions: "We are engaged in research and development for superior rubber."

    },
    {
        title: 'Money Viscosity Measurements',
        descriptions: "And check to ensure that it satisfies a variety of physical property requirements."

    },
    {
        title: 'Hardness & Specific Gravity Measurements',
        descriptions: ""

    },
    {
        title: 'Tensile Strength Measurements',
        descriptions: ""
    },

];


const data3 = [
    {
        title: 'Compressive Load Measurements',
        descriptions: "We develop products that satisfy load requirements."

    },
    {
        title: 'Pressure Distribution Measurements',
        descriptions: "The measuring of contact pressure exerted on products in real-time aids in the analysis of product defects."

    },
    {
        title: 'Sound-Insulating Performance Evaluations',
        descriptions: "As comfortable cabin spaces are highly desired by our customers, we are constantly in pursuit of materials with enhanced sound-insulating performance."

    },
    {
        title: 'Dynamic Load Measurements',
        descriptions: ""
    },
    {
        title: 'Sliding Friction Ratings',
        descriptions: ""
    },

];
const TechList: React.FC = () => (
    <>
        <div className="box-topic-tech">
            <div className="box-topic-tech-box">
                <h1 className='Introduction'>Introduction of development technology</h1>
            </div>

        </div>
        <div className='box-tech'>

            <br /><br />
            <Divider orientation="left"><h1 className='title-tech-h1'>Design & Analysis</h1> </Divider>
            <List
                itemLayout="horizontal"
                dataSource={data1}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta
                            title={<p className='title-tech'>{item.title}</p>}
                            description={<p>{item.descriptions}</p>}
                        />
                    </List.Item>
                )}
            />

            <br /><br />
            <Divider orientation="left"><h1 className='title-tech-h1'>Materials Development</h1> </Divider>
            <List
                itemLayout="horizontal"
                dataSource={data2}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta

                            title={<p className='title-tech'>{item.title}</p>}
                            description={<p>{item.descriptions}</p>}
                        />
                    </List.Item>
                )}
            />
            <br /><br />
            <Divider orientation="left"><h1 className='title-tech-h1'>Functional Evaluation</h1> </Divider>
            <List
                itemLayout="horizontal"
                dataSource={data3}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <List.Item.Meta

                            title={<p className='title-tech'>{item.title}</p>}
                            description={<p>{item.descriptions}</p>}
                        />
                    </List.Item>
                )}
            />
        </div>
    </>
);

export default TechList;