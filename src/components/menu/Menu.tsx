import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';

function Menu() {
  const menuOptions = [
    {
      name: 'Home',
      link: '/',
      icon: <HomeIcon />
    },
    {
      name: 'Search',
      link: '/',
      icon: <SearchIcon />

    },
    {
      name: 'Restaurants',
      link: '/',
      icon: <RestaurantIcon/>
    },
    {
      name: 'About',
      link: '/about',
      icon: <InfoIcon />
    },
  ]
  return (
    <div className=" bg-orange-200 text-lg  rounded-r-lg ">
      {
        menuOptions.map((option) => (
          <div key={menuOptions.indexOf(option)} className='flex items-center h-14 border border-gray-300 hover:bg-orange-300 px-4 space-x-5'>
            {option.icon}
            <a key={menuOptions.indexOf(option)} href={option.link} className=" "> {option.name} </a>
          </div>
        ))
      }
    </div>
  )
}

export default Menu