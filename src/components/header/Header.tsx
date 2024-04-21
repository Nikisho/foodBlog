import React from 'react'

function Header() {
    return (
        <div className='h-20 0 shadow-lg flex justify-between items-center px-5 text-xl font-mono'>
            <div className='flex space-x-4'>

                <button className='text-black'>&#128269;</button>
                <button>Recipes</button>
            </div>
            <a href='/'>
                <img
                    src='https://www.pickuplimes.com/static/images/logo/pul_logo_main_flat_987_247.9cf5ed7b1374.png'
                    className='h-16 animate-pulse'
                />
            </a>
            <div>
                <div></div>
                <button>About</button>
            </div>

        </div>
    )
}

export default Header