import { useState, useEffect } from "react";

const useCountAnimation = (start, end, duration = 2000)=> {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(start + (end - start) * percentage));

            if (percentage < 1) {
                animationFrameId = requestAnimationFrame(animate)
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId)
    }, [start, end, duration]);

    return count;
};

export default useCountAnimation;