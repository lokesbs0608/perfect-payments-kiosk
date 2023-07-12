import React from 'react'
import styles from './styles.module.scss';
import CustomButton from '../atoms/CustomButton'

const Header = () => {

  const  handleClick = ()=>{
    alert('ok')
  }
  return (
    <div className={styles.container}>
      <div style={{width:'200px'}}>
      <CustomButton title='Book Demo' onClick={handleClick}/>

      </div>
    </div>
  )
}

export default Header
