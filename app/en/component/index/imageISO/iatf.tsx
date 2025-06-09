import React from 'react';
import { Image } from 'antd';
import './iatf.css'
const alt = 'JIEI(THAILADN).CO.,LTD'
const App: React.FC = () => (
    <div className='group-image-iso'>
        <div className="image-iso-box">
            <Image.PreviewGroup preview={{ onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`), }}>
                <div className="iso-iatf">
                    <div className="box-image-iso-index">
                        <div><p className='text-iso'>IATF16949</p></div>
                        <div className="box-image-iso-index-iso">
                            <Image className='image-iso-index' src="/IATF1.png" alt={alt} />
                            <Image className='image-iso-index' src="/IATF2.png" alt={alt} />
                        </div>
                    </div>

                    <div className="box-image-iso-index">
                        <div className="box-image-iso-index-iso900114001">
                            <div className="iso9001">
                                <div><p className='text-iso'>ISO 9001</p></div>
                                <Image className='image-iso-index' src="/9001.png" alt={alt} />
                            </div>
                             <div className="iso9001">
                                <div><p className='text-iso'>ISO 14001</p></div>
                               <Image className='image-iso-index' src="/14001.png" alt={alt} />
                            </div>
                            
                        </div>

                    </div>
                   
                </div>






            </Image.PreviewGroup>

        </div>


    </div>

);

export default App;