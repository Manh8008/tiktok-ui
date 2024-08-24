import { useState, useEffect } from 'react';

function useDeBounce(value, delay) {
    const [deBouncedValue, setDeBouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeBouncedValue(value), delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return deBouncedValue;
}

export default useDeBounce;
