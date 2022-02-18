import React from 'react';
import Theme from './features/theme/Theme';
import Coin from './features/coin/Coin';
import Counter from './features/counter/Counter';

function React_Redux() {
    return (
        <>
            {/* <div style={{ background: "black" }}> */}
                <Counter />
                <Coin />
                <Theme />
            {/* </div> */}
        </>
    );
}

export default React_Redux;