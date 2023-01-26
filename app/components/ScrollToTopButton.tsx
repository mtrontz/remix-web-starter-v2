import React, { useRef } from 'react';

interface ScrollToTopButtonProps {
    // ref: React.ElementRef<'body'>
}
// <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({}) => {
    return (
        <>
        <button onClick={() => window.scrollTo({top: 0})}>Scroll to top</button>
        </>
    );
}