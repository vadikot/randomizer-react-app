import React from 'react';

const AboutUs = () => {
    return (
        <div className='about'>
            <h1 className='list__title'>About Us</h1>
            <div className='about__information'>
                <p>Hi, this is a Single-Page blog with using <a href='https://jsonplaceholder.typicode.com' target="_blank">jsonplaceholder
                    API</a>.<br/><br/>
                    When switching between pages, all loaded users are saved, so you will not lose anyone, you can also load more users, but
                    if you go to the home page, all loaded users will be deleted and new ones will be loaded.<br/><b>Note:</b> App developed with React v18 and <a
                        href='https://jsonplaceholder.typicode.com' target="_blank">jsonplaceholder
                        API</a>.</p>
                <p>You can also see more of my work on my <a href='https://github.com/vadikot' target="_blank">GitHub</a> account</p><br/>

                <div className='about__author'>
                    <p>App developed by <b>Vadim Kotsia</b>.</p>
                    <div className='about__links'>
                        <a href='https://github.com/vadikot' target="_blank">GitHub</a>
                        <a href='https://www.linkedin.com/in/vadim-kotsia-0b39aa180/' target="_blank">LinkedIn</a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;