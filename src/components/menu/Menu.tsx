function Menu() {
  const menuOptions = [
    {
      name: 'Home',
      link:'/'
    },
    {
      name: 'Search',
      link:'/'
    },
    {
      name: 'Restaurants',
      link:'/'
    },
    {
      name: 'About',
      link:'/about'
    },
  ]
  return (
    <div className=" bg-orange-200 text-lg  rounded-r-lg ">
      {
        menuOptions.map((option) => (
          <a key={menuOptions.indexOf(option)} href={option.link} className="flex items-center h-14 border border-gray-300 hover:bg-orange-300 px-4 "> {option.name} </a>
        ))
      }
    </div>
  )
}

export default Menu