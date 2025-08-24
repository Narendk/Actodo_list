import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 className='text-3xl font-medium'>Hello {props.username}</h1>
            <p>I help you manage your activities :</p>
        </header>
    )
}

export default Header