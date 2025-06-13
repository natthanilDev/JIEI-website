'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import googleMap from '../../../../public/googleMap.png'
export default function Map() {


    const alt = 'JIEI(THAILAND).CO.,LTD'
    return (
        <div>
            <div className="google-map">
                <Link href={'https://maps.app.goo.gl/DQisU1gNXxofPRLYA'} target='_blank'>
                    <Image className='googleMAP' src={googleMap} priority alt={alt} />
                </Link>

            </div>
        </div>
    )
}

