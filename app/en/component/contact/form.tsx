'use client'
import { backend } from './backend';
import Link from 'next/link';
import Map from './map';
export default function Form() {
  const headleSubmit = async (e: {
    currentTarget: HTMLFormElement | undefined; preventDefault: () => void;
  }) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = await backend(formData)


    return data;
  }
  return (
    <div className='background-contact'>

      <div className="contact-box">
        <div className="form-box">
          <form onSubmit={headleSubmit}>

            <div className="card-form-contact">
              <div className="title-form-contact">
                <div className="">
                  <h1 className='contactUS'>Contact Us</h1>
                  <p className='text-contact-message'>If you have any questions or need more information, please fill out the form, and a representative from Jiei (Thailand) Co., Ltd. will get back to you as soon as possible.</p>
                </div>
                <div className="card-staff">

                  <Link target='_blank' href={'mailto://compose?to=jiei-sales@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>
                    <div className="contect-box-link">
                      <p>jiei-sales@jieithai.com</p>
                      <p className='section-contact'>Sales Department</p>
                    </div>
                  </Link>
                  <Link target='_blank' href={'mailto://compose?to=jiei-pur@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                    <div className="contect-box-link">
                      <p>jiei-pur@jieithai.com</p>
                      <p className='section-contact'>Purchasing Department</p>
                    </div>
                  </Link>
                  <Link target='_blank' href={'mailto://compose?to=jiei-hr@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>

                    <div className="contect-box-link">
                      <p>jiei-hr@jieithai.com</p>
                      <p className='section-contact'>Human and Rource Department</p>

                    </div>
                  </Link>

                  <Link target='_blank' href={'mailto://compose?to=jiei-safety@jieithai.com&subject=หัวเรื่อง&body=ข้อความ'}>
                    <div className="contect-box-link">
                      <p>jiei-safety@jieithai.com</p>
                      <p className='section-contact'>Safety and Environment Department</p>
                    </div>
                  </Link>


                </div>
              </div>
              <div className="input-form-contact">
                  <h1 className="formContact">
                      FORM CONTACT
                  </h1>
                <div className="inputText">
                  <div className="input">
                    <input className='name' name='name' placeholder='ชื่อ-สกุล' type="text" /> <span className='labelinput'>YOUR NAME </span>
                  </div>
                </div>


                <div className="inputText">
                  <div className="input">
                    <input className='name' name='email' placeholder='อีเมลล์' type="email" /> <span className='labelinput'>Email </span>
                  </div>
                </div>


                <div className="inputText">
                  <div className="input">
                    <input className='name' name='address' placeholder='ที่อยู่' type="text" /> <span className='labelinput'>Address</span>
                  </div>
                </div>


                <div className="inputText">
                  <div className="input">
                    <input className='name' name='phone' placeholder='เบอร์โทร' type="tel" /> <span className='labelinput'>Phone</span>
                  </div>
                </div>


                <div className="inputText">
                  <div className="input">
                    <input className='name' name='subject' placeholder='เรื่อง' type="text" /> <span className='labelinput'>Subject</span>
                  </div>
                </div>


                <div className="inputText">
                  <div className="input">
                    <textarea name="message" className='messageInput' id="message" placeholder="ข้อความ" required></textarea> <span className='labelinput'>Message </span>
                  </div>
                </div>



                <input type="submit" className='sendsubmit' value="Send" />


              
                
              </div>

            </div>

          </form>


            <div className="button-submit-map">
                  <Map />
                </div>
        </div>
      </div>
    </div>
  )
}
