import React from 'react';

export const Contacts = () => {

    const handleSubmit = (e) => e.preventDefault();

    return (
        <div className='contacts' id='contact'>
            <div className='container'>
                <div className='contacts__inner'>

                    <div className='block-title'>
                        Contacts
                    </div>
                    <div className='contacts__form'>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='Your name' className='form__input' />
                            <input placeholder='Your email' className='form__input' />
                            <textarea placeholder='Your message' className='form__input contacts__textarea' />
                            <button className='btn btn--from' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};