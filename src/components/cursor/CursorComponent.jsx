import React, { useEffect } from 'react';

const CursorComponent = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const innerCursor = document.querySelector('.inner-cursor');
    
    const updateCursorPosition = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Move the outer circle (cursor)
      cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
      
      // Move the inner circle (actual cursor)
      innerCursor.style.left = `${x - innerCursor.offsetWidth / 2}px`;
      innerCursor.style.top = `${y - innerCursor.offsetHeight / 2}px`;
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <div className="cursor fixed 
      w-10 h-10 border border-white rounded-full pointer-events-none transition-all z-50">

      </div>
      {/* Inner Cursor */}
      <div className="inner-cursor fixed w-2.5 h-2.5 bg-blue-700 rounded-full
       pointer-events-none z-50"></div>
      
      {/* Example elements to hover over */}
    </>
  );
};

export default CursorComponent;
