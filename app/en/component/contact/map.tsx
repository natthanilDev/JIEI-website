'use client'

import React, { useState } from 'react';
import { Button, Image } from 'antd';
import {EnvironmentOutlined } from '@ant-design/icons'

const Map: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handlePreview = () => {
    setVisible(true);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  return (
    <>
      <Button className="view-map-button" onClick={handlePreview}>
        View Map <EnvironmentOutlined />
      </Button>

      {/* The Image component is hidden by default and only shown in the preview */}
      <Image
        style={{ display: 'none' }}
        alt="JIEI (THAILAND) CO., LTD"
        preview={{
          visible: visible, // Control the visibility of the preview
          src: '/imageMap.png',
          onVisibleChange: handleVisibleChange, // Update state when preview visibility changes
        }}
      />
    </>
  );
};

export default Map;