import React from 'react';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Wars } from '../../images/wars.svg';


const Header = () => {
  return (
    <div className='header'>
      <Star className='star-title' />
      <h2>
        <span>S</span>
        <span>w</span>
        <span>a</span>
        <span>p</span>
        <span>i</span>
        <span>-</span>
        <span>B</span>
        <span>o</span>
        <span>x</span>
      </h2>
      <Wars className='wars-title' />
    </div>
  )
}

export default Header;