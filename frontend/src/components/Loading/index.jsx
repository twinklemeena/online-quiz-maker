import { Box } from '@radix-ui/themes';
import React from 'react';
import 'ldrs/hourglass';

const Loading = () => {
    return (
        <div className='z-50 absolute top-0 w-screen h-screen backdrop-filter backdrop-blur-[2px]  bg-white/10 flex items-center justify-center'>
            <l-hourglass
                size="40"
                bg-opacity="0.1"
                speed="1.75"
                color="rgb(54,132,218)"
            ></l-hourglass>
        </div>
    );
};

export default Loading;
