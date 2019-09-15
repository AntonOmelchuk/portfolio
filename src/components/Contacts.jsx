import React from 'react';

export const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='container'>
                <div className='contacts__inner'>

                    <div className='block-title'>
                        Contacts
                    </div>
                    <div className='contacts__form'>
                        <form>
                            <input className='form__input' />
                            <input className='form__input' />
                            <textarea className='form__input contacts__textarea' />
                            <button className='btn btn--from' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};