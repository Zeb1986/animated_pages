import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{width :undefined | number, height :undefined | number}>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        if (typeof window !== undefined && windowSize.width === undefined && windowSize.height === undefined) {
            handleResize()
        }
        if (typeof window !== undefined) {

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };}
    }, []);

    return windowSize;
}
