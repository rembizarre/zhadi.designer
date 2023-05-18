import React, { useEffect, useState } from 'react';
import Arrow from '../../assets/images/arrow.svg';
import './Scroller.sass';

export default function Scroller() {
  const [show, setShow] = useState();

  // watching for scrolling and showing the button
  useEffect(() => {
    const handleScrollBtnVisibility = () =>
      window.pageYOffset > 485 ? setShow(true) : setShow(false);

    window.addEventListener('scroll', handleScrollBtnVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollBtnVisibility);
    };
  }, []);

  // returning back to top upon clicking the button
  const handeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={`scroller ${show ? 'showScroll' : ''}`} onClick={handeClick}>
      <img src={Arrow} alt="Наверх" />
    </div>
  );
}
