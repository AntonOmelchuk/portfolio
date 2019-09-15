import React from 'react';
import {WorkItem} from "./WorkItem";

export const Works = () => {
    return (
        <div className='works block'>
            <div className='container'>
                <div className='block-title'>My works</div>
                <div className='works__inner'>

                 <WorkItem />
                 <WorkItem />
                 <WorkItem />

                </div>
            </div>
        </div>
    )
};