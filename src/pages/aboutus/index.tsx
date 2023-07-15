import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import WhoweAreImage from '../../assets/Images/Whoweare.svg'

const Aboutus = () => {
  return (
    <div>
       <div className={styles.heading}>ABOUT US</div>
      <div className={styles.heading2}>who are we</div>
      <div className='d-flex gap-5 mt-5  justify-content-center' >
        <div style={{width:'40%'}} className={styles.shadow_bg} >
            <div className={styles.img_cont}>
            <Image src={WhoweAreImage} alt='weare'/>
            </div>
        </div>
        <div style={{width:'40%'}}>
            <div className={styles.card_heading}>
            Lorem ipsum dolor sit amet consectetur. Ultricies massa quis.
            </div>
            <p style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat eget at in enim. Pulvinar vulputate sapien.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
