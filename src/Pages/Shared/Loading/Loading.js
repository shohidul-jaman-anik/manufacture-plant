import React from 'react';
import { LoopCircleLoading } from 'react-loadingg';

const Loading = () => {
    return (
        <div className=' h-screen flex justify-center items-start '>
            <LoopCircleLoading size="large" />;
        </div>
    );
};

export default Loading;

