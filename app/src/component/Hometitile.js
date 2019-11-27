import React from 'react';
import './../component_css/Home.css';


function Hometitle(props) {
    return (
        <div>
            <div className='zyx_bottom_1_one'>
                <p className='zyx_bottom1_p'>{props.title[0]}</p>
                <p className='zyx_bottom1_p1'>{props.comment ? props.comment[0].people : '--'}</p>
            </div>
            <div className='zyx_bottom_1_two'>
                <p className='zyx_bottom1_p'>{props.title[1]}</p>
                <p className='zyx_bottom1_p1'>{props.comment ? props.comment[0].entry : '--'}</p>
            </div>
            <div className='zyx_bottom_1_three'>
                <p className='zyx_bottom1_p'>{props.title[2]}</p>
                <p className='zyx_bottom1_p1'>{props.comment ? props.comment[0].leave : '--'}</p>
            </div>
            <div className='zyx_bottom_1_four'>
                <p className='zyx_bottom1_p'>{props.title[3]}</p>
                <p className='zyx_bottom1_p1'>{props.comment ? props.comment[0].administrator : '--'}</p>
            </div>

        </div>
    )
}

export default Hometitle