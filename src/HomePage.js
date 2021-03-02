import React from 'react';
import './HomePage.css';
import Typical from 'react-typical';


const HomePage = () => {
    return (
        <div className='homepage'>
            <h3 className="homepage__text__holder">
                Hello, My name is Ashkan
            </h3>
            <p className="homepage__myJob">
                I am a Full Stack Developer
            </p>
            <div className="homepage___text">
            
            <p className="homepage__mySkills">
                
                <Typical 
                 loop={Infinity}
                 wrapper='b'
                 steps={[
                     'React.js',
                     1000,
                     'Redux',
                     1000,
                     'Javascript',
                     1000,
                     'SASS',
                     1000,
                     'HTML',
                     1000,
                     'Git',
                     1000,
                     'ReactNative',
                     1000,
                    
                 ]}
                 />
            </p>
            </div>
            
        </div>
    )
}

export default HomePage;
