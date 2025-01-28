import { useState, useEffect, useRef } from "react";

const useThrottle = (value, interval = 500) => {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastExecuted = useRef(0);

    useEffect(() => {
        const now = Date.now();
        if (now - lastExecuted.current >= interval) {
            setThrottledValue(value);
        } else {
            const timeout = setTimeout(() => {
                setThrottledValue(value);
            }, interval - (now - lastExecuted.current));

            return () => clearTimeout(timeout);
        }
        lastExecuted.current = now;
    }, [value, interval]);

    return throttledValue;
};

export default useThrottle;
