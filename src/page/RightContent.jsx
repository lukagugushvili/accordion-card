import React, { useState } from 'react';
import arrow from '../img/arrow/arrow.SVG'

const RightContent = () => {

  const [show, setShow] = useState(0);


  return (

    <div className='right-content-box'>
      <h1>FAQ</h1>
      <div className='according-box'>
          <div className='according-lists'>
            <div className="according-text-box">
              <span>How many team members can I invite?</span>
              <img onClick = {() => setShow(1)} src={arrow} alt="arrow-icon" />
            </div>
            <div>{show === 1 &&(
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint veniam temporibus.</p>
            )}
            </div>
          </div>
          <div className='according-lists'>
            <div className="according-text-box">  
              <span>What is the maximum file upload size?</span>
              <img onClick = {() => setShow(2)} src={arrow} alt="arrow-icon" />
            </div>
            <div>{show === 2 && (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint veniam temporibus.</p>
            )}
            </div>
          </div>
          <div className='according-lists'>
            <div className="according-text-box">  
              <span>How do I reset my password?</span>
              <img onClick = {() => setShow(3)} src={arrow} alt="arrow-icon" />
            </div>
            <div>{show === 3 && (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint veniam temporibus.</p>
            )}
            </div>
          </div>
          <div className='according-lists'>
            <div className="according-text-box">
              <span>Can I cancel my subscription?</span>
              <img onClick = {() => setShow(4)} src={arrow} alt="arrow-icon" />
            </div>
            <div>{show === 4 && (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint veniam temporibus.</p>
            )}
            </div>
          </div>
          <div className='according-lists'>
            <div className="according-text-box">
              <span>Do you provide additional support?</span>
              <img onClick = {() => setShow(5)} src={arrow} alt="arrow-icon" />
            </div>
            <div>{show === 5 && (
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint veniam temporibus.</p>
            )}
            </div>
          </div>
      </div>
    </div>

  )
};

export default RightContent;