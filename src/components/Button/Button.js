import React from 'react';
import { animated, useInView } from '@react-spring/web';
import './Button.sass';

export default function Button({ text, path }) {
  // animation for button
  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: '99%',
      },
      to: {
        opacity: 1,
        y: '0',
      },
      config: {
        duration: 250,
      },
    }),
    {
      rootMargin: '30% 0%',
    },
  );

  return (
    <animated.a ref={ref} style={inView} href={path} className="regularBtn">
      {text}
    </animated.a>
  );
}
