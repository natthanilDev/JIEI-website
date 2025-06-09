'use client'
import React, { useState } from 'react';
import { Button, Image } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons'
import './contact.css'
const ButtonViewMap: React.FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="View-map">
                <Button  className="button-viewmap" onClick={() => setVisible(true)}>
                    <EnvironmentFilled className="vitemap-icon" /> Show Map
                </Button>
            </div>


            <Image.PreviewGroup
                preview={{
                    visible,
                    onVisibleChange: (value) => setVisible(value),
                }}
            >
                {/* ซ่อนไว้ แต่ต้องมี src เพื่อ preview ทำงาน */}
                <Image
                    src="/map.jpg"
                    alt="Company Location Map"
                    style={{ display: 'none' }}
                />
            </Image.PreviewGroup>
        </>
    );
};

export default ButtonViewMap;
