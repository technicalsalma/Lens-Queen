import React from 'react';
import notFound from '../../images/notfount1.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
      <div className="not-fount">
        <img src={notFound} alt="" />
      </div>
    );
};

export default NotFound;