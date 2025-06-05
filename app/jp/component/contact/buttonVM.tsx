'use client'
import { EnvironmentFilled, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Image from 'next/image'
import ImageMap from '../../../../public/map.jpg'

export default function ButtonVM() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <div className="View-map">
                <button
                    onClick={() => setShow(true)}
                    className="button-viewmap"
                >
                    <EnvironmentFilled className="vitemap-icon" /> 地図を見る
                </button>
            </div>

            {show && (
                <div className="popup-map-overlay">
                    <div className="popup-map-content">
                        <button
                            onClick={() => setShow(false)}
                            className="close-popup-map"
                        >
                            <CloseOutlined /> 閉じる
                        </button>
                        <Image
                            src={ImageMap}
                            alt="JIEI(THAILAND).CO.,LTD"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
