
function RecipePosts() {
    const cards: string[] = [
        'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',
        'https://cdn.pickuplimes.com/cache/27/e0/27e0bfb15307055938ff0d8fcea00068.jpg',
        'https://cdn.pickuplimes.com/cache/ac/bf/acbfed5589d3a3b96884a491687566f7.jpg',
        'https://cdn.pickuplimes.com/cache/21/18/211886ca12104607a8c71a3bcef87960.jpg'
    ];


  return (
    <div className="w-full p-5 gap-10 grid
         xl:grid-cols-4
         2xl:grid-cols-6
         ">
        {cards?.map((card) => (
            <img className="rounded-xl transition duration-700 hover:scale-105" src={card}/>
        ))}
    </div>
  )
}

export default RecipePosts