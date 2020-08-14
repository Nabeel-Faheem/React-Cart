import React from 'react';

// Custom Imports
import Wrap from './Wrap';

const LazyFallback = ({ txt }) => {
    return (
        <Wrap>
            <strong>{ txt }</strong>
        </Wrap>
    )
}

export default LazyFallback;
