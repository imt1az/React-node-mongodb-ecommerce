import React from 'react';

const Loading = ({full}) => {
    return (
        <div>
            <div className='container mx-auto'>
                {
                    full ?
                    <div className={`min-h-screen flex justify-center items-center`}>
                    <button className="font-bold text-gray-900">loading....</button>
                    </div>
                    : ''
                }
           
        </div>
        </div>
    );
};

export default Loading;