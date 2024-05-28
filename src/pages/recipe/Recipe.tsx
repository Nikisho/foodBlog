
function Recipe() {
  return (
    <div className="h-auto xl:w-4/5 p-5 mt-4">
       {/* Title and Image with recipe intro*/}
        <div className="flex xl:pace-x-5 flex-col xl:flex-row space-y-5 xl:space-y-0">

          <div className="w-full xl:w-1/2 space-y-5">
            <p className="text-6xl  font-bold" style={{fontFamily: 'sans'}}>Quiche Lorraine</p>
            <p className="text-xl italic">Quiche Lorraine is a classic French dish from the Lorraine region, 
              featuring a rich filling of eggs, cream, and lardons (bacon) in a buttery pastry crust.
              </p>
          </div>

          <div className="w-full xl:w-1/2 xl:p-5">
            <img 
              src="https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg"
              className="rounded-xl"
            />
          </div>

        </div>

    </div>
  )
}

export default Recipe