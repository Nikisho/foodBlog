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
    <div className=" bg-orange-100 border border-orange-800 text-lg  rounded-r-lg ">
      {
        menuOptions.map((option) => (
          <a key={menuOptions.indexOf(option)} href={option.link} className="flex items-center h-8 hover:bg-orange-300 px-4"> {option.name} </a>
        ))
      }
    </div>
  )
}

export default Menu