import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Somewhere() {
    const myRef = useRef(null);

    useEffect(() => {
        gsap.to(myRef.current, { duration: 1, x: 100 });
    }, []);

    return <div ref={myRef}>Animate Me!</div>;
}

export default Somewhere;
