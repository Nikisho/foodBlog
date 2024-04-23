import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <div className='h-20 0 shadow-lg flex justify-between items-center px-5 text-xl font-mono'>
            <div className='flex space-x-4'>

                <button className=''>
                    <MenuIcon />
                </button>
                <button>Recipes</button>
            </div>
            <a href='/'>
                <div className='text-3xl font-bold animate-pulse text-amber-900' style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>
                    NikosCookBook&#129369;
                </div>
            </a>
            <div>
                <div></div>
                <a href='/about'>About</a>
            </div>

        </div>
    )
}

export default Header