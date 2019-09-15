import React from 'react';
import {SkillItem} from "./SkilItem";

export const Skills = () => {
    return (
        <div className='skills block'>
            <div className='container'>
                <div className='block-title'>My skills</div>
                <div className='skills__inner'>

                    <SkillItem />
                    <SkillItem />
                    <SkillItem />

                </div>
            </div>
        </div>
    )
};