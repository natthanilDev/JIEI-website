import React from 'react';
import Link from 'next/link';



export default function networklist() {
    const data = [
        {
            country: 'Japan',
            company: 'KASEI KOGYO CO., LTD.',
            url: 'http://www.kaseikogyo.com'
        },
        {
            country: 'China',
            company: 'JIEI TECHNICAL TRADING(SHANGHAI)CO., LTD.',
            url: ''
        },
        {
            country: 'China',
            company: 'JIEI TECHNICAL TRADING(SHANGHAI)CO., LTD. GUANGZHOU OFFICE Guangzhou Office',
            url: ''
        },
        {
            country: 'China',
            company: 'JIAXING JIEI AUTOMOBILE PARTS CO., LTD. Wuhan Office',
            url: ''
        },
        {
            country: 'China',
            company: 'Jiaxing Jiei Automobile Parts Co., Ltd.',
            url: ''
        },
        {
            country: 'Singapore',
            company: 'JIEI (Singapore) Pte. Ltd.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'TOKAI KOGYO CO., LTD.',
            url: 'http://www.tokaikogyo.co.jp/'
        },
        {
            country: 'Japan',
            company: 'ADO CO., LTD.',
            url: 'http://www.e-ado.co.jp/'
        },
        {
            country: 'Japan',
            company: 'ALFA CO., LTD.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'COWERK CO., LTD.',
            url: ''
        }, {
            country: 'Japan',
            company: 'SEIWA KOGYO CO., LTD.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'TAKARA KASEI KOGYO CO., LTD.',
            url: '	http://www.takarakasei.com/'
        },
        {
            country: 'Japan',
            company: 'TOA GOMU KOGYO CO., LTD.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'TOKAI KOGYO SEIKI CO., LTD.',
            url: 'http://www.t-seiki.co.jp/'
        },
        {
            country: 'Japan',
            company: 'TOKAI KOGYO SEIKI CO., LTD.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'Fuji Co., Ltd.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'Toa Gomu Kogyo Co., Ltd.',
            url: ''
        },
        {
            country: 'Japan',
            company: 'BUTSURYU CENTER LTD.',
            url: ''
        },
        {
            country: 'America',
            company: 'GREEN TOKAI CO., LTD.',
            url: 'http://www.greentokai.com/'
        },
        {
            country: 'Thailand',
            company: 'TOACS THAILAND CO., LTD.',
            url: ''
        },
        {
            country: 'Singapore',
            company: 'TOACS CENTER PTE., LTD.',
            url: ''
        },
        {
            country: 'Vietnam',
            company: 'VIETNAM TOKAI CO., LTD.',
            url: ''
        },
        {
            country: 'China',
            company: 'GUANGZHOU TOKAI MINTH AUTOMOTIVE PARTS CO., LTD.',
            url: ''
        },
        {
            country: 'Mexico',
            company: 'TK MINTH MEXICO, S.A. de C.V.',
            url: ''
        },
        {
            country: 'Indonesia',
            company: 'PT.TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)',
            url: ''
        },
        {
            country: 'India',
            company: 'PPAP TOKAI INDIA RUBBER PTE. LTD.',
            url: ''
        },
        {
            country: 'Thailand',
            company: 'TOKAI JIEI ASIA CO., LTD.',
            url: ''
        },
    ]

    const partner = [
        {
            country: 'Korea',
            company: 'YOUNGSHIN CHEMICAL CO., LTD.',
            url: 'http://www.youngshinchemical.com/'
        },
        {
            country: 'China',
            company: 'ZHEJIANG XIANTONG RUBBER&PLASTIC CO., LTD.',
            url: ''
        },
        {
            country: 'Philippines',
            company: 'TITAN RUBBER',
            url: ''
        },
        {
            country: 'Malaysia',
            company: 'PONG CODAN RUBBER [M] SDN. BHD.',
            url: ''
        },
        {
            country: 'China',
            company: 'Jiaxing Jiei Automobile Parts Co., Ltd.',
            url: ''
        },
        {
            country: 'Singapore',
            company: 'JIEI (Singapore) Pte. Ltd.',
            url: ''
        },

    ]
    return (
        <div>

            <div className="grid-netword">
                <div className="title-network">
                    <h1 className='text-company-partner'>Associated Company</h1>
                </div>
                <div className="grid-box">
                    {data.map((item, index) => (
                        <Link href={item.url} target='_blank' key={index}>
                            <div className="card-network" >
                                <div className="background-country">
                                    <p className='country'>{item.country}</p>
                                </div>
                                <div className="background-text">
                                    <p className='company-network'>{item.company}</p>
                                    <p className='url-network'>{item.url}</p>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>




                <div className="title-network">
                    <h1 className='text-company-partner'>Partner</h1>
                </div>
                <div className="grid-box">
                    {partner.map((item, index) => (
                        <Link href={item.url} target='_blank' key={index}>
                            <div className="card-network" >

                                <div className="background-country">
                                    <p className='country'>{item.country}</p>
                                </div>
                                <div className="background-text">
                                    <p className='company-network'>{item.company}</p>
                                    <p className='url-network'>{item.url}</p>

                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* <div>
                <div>
                    <div className="list-product">
                        <div className="box-topic-product">
                            <p>Region</p>
                        </div>
                        <div className="box-topic-discription">
                            <p>Company name</p>
                        </div>
                        <div className="box-topic-discription">
                            <p>URL</p>
                        </div>
                    </div>

                    <div className="tabel-product-list-box">
                        <div className="box-car-product">
                            <div className="car-topic">
                                <h1>Associated Company </h1>
                            </div>
                        </div>
                        <div className="discript-box">
                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>KASEI KOGYO CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>http://www.kaseikogyo.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>China</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>JIEI TECHNICAL TRADING(SHANGHAI)CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>	</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>China</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>JIEI TECHNICAL TRADING(SHANGHAI)CO., LTD. GUANGZHOU OFFICE Guangzhou Office</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>	</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>China</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>JIAXING JIEI AUTOMOBILE PARTS CO., LTD. Wuhan Office</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>China</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>Jiaxing Jiei Automobile Parts Co., Ltd.	</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Singapore</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>JIEI (Singapore) Pte. Ltd.	 </p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>


                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOKAI KOGYO CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>http://www.tokaikogyo.co.jp/</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>ADO CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>http://www.e-ado.co.jp/</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>ALFA CO., LTD.	 </p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>	Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>COWERK CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>SEIWA KOGYO CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TAKARA KASEI KOGYO CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>	http://www.takarakasei.com/</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOA GOMU KOGYO CO., LTD.	</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>


                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>	Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOKAI KOGYO SEIKI CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>http://www.t-seiki.co.jp/</p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Japan	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOKAI KOGYO SEIKI CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>	Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>	Fuji Co., Ltd.	</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>	Japan</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>Toa Gomu Kogyo Co., Ltd.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>	</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Japan	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>BUTSURYU CENTER LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>America	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>GREEN TOKAI CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p>http://www.greentokai.com/</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Thailand	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOACS THAILAND CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Singapore	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOACS CENTER PTE., LTD.	 </p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>Vietnam	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>VIETNAM TOKAI CO., LTD.	 </p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>


                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>China	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>GUANGZHOU TOKAI MINTH AUTOMOTIVE PARTS CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>	Mexico</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TK MINTH MEXICO, S.A. de C.V.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>Indonesia	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>PT.TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box2">
                                <div className="list-topic-pro">
                                    <p>India	</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>PPAP TOKAI INDIA RUBBER PTE. LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="discription-box1">
                                <div className="list-topic-pro">
                                    <p>	Thailand</p>
                                </div>
                                <div className="list-list">
                                    <div className="list-list-list">
                                        <p>TOKAI JIEI ASIA CO., LTD.</p>
                                    </div>
                                    <div className="list-list-list-list">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br />




                <div className="tabel-product-list-box">
                    <div className="box-car-product">
                        <div className="car-topic">
                            <h1>Partner</h1>
                        </div>
                    </div>
                    <div className="discript-box">
                        <div className="discription-box1">
                            <div className="list-topic-pro">
                                <p>Korea</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>YOUNGSHIN CHEMICAL CO., LTD.</p>
                                </div>
                                <div className="list-list-list-list">
                                    <p>	http://www.youngshinchemical.com/</p>
                                </div>
                            </div>
                        </div>

                        <div className="discription-box2">
                            <div className="list-topic-pro">
                                <p>China</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>ZHEJIANG XIANTONG RUBBER&PLASTIC CO., LTD.</p>
                                </div>
                                <div className="list-list-list-list">
                                    <p>	</p>
                                </div>
                            </div>
                        </div>

                        <div className="discription-box1">
                            <div className="list-topic-pro">
                                <p>Philippines</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>TITAN RUBBER</p>
                                </div>
                                <div className="list-list-list-list">
                                    <p>	</p>
                                </div>
                            </div>
                        </div>

                        <div className="discription-box2">
                            <div className="list-topic-pro">
                                <p>Malaysia</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>PONG CODAN RUBBER [M] SDN. BHD.</p>
                                </div>
                                <div className="list-list-list-list">
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className="discription-box1">
                            <div className="list-topic-pro">
                                <p>China</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>Jiaxing Jiei Automobile Parts Co., Ltd.	</p>
                                </div>
                                <div className="list-list-list-list">
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className="discription-box2">
                            <div className="list-topic-pro">
                                <p>Singapore</p>
                            </div>
                            <div className="list-list">
                                <div className="list-list-list">
                                    <p>JIEI (Singapore) Pte. Ltd.	 </p>
                                </div>
                                <div className="list-list-list-list">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    )
}
