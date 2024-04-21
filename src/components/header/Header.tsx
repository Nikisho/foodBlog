import React from 'react'

function Header() {
    return (
        <div className='h-20 0 shadow-lg flex justify-between items-center px-5 text-xl font-mono'>
            <div>Recipes</div>
            {/* <div className='text-2xl m-2  px-4 flex items-center font-bold hover:scale-105 transition duration-500'>
            PengFood.com
        </div> */}
            <a href='/'>
                <img
                    src='https://www.pickuplimes.com/static/images/logo/pul_logo_main_flat_987_247.9cf5ed7b1374.png'
                    className='h-16 animate-pulse'
                />
            </a>

            <div>About</div>

        </div>
    )
}

export default Header