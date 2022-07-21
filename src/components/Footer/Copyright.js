import React from 'react';


const Copyright = () => {
    const year = new Date().getFullYear();


    return (
        <div className="copyright">
            <p>nidup&copy;{year}. All rights are reserved.</p>
        </div>
    )
}

export default Copyright;