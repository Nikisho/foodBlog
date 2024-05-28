import MenuIcon from '@mui/icons-material/Menu';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
    showMenu: boolean
    setShowMenu: Dispatch<SetStateAction<boolean>>
}


const Header: React.FC<HeaderProps> = ({showMenu, setShowMenu}) => {

    const handleClick = () => {
        if (showMenu===true) {
            setShowMenu(false)
        } else if (showMenu === false) {
            setShowMenu(true)
        }
    }

    return (
        <div className='h-20 0 shadow-lg flex justify-between items-center px-5 text-xl font-mono'>
            <div className='flex space-x-4'>

                <button className='' onClick={handleClick}>
                    <MenuIcon />
                </button>
            </div>
            <a href='/'>
                <div className='text-3xl font-bold animate-pulse text-amber-900' style={{ fontFamily: 'Brush Script MT, Brush Script Std, cursive' }}>
                    NikosCookBook&#129369;
                </div>
            </a>
                <div></div>

        </div>
    )
}

export default Header