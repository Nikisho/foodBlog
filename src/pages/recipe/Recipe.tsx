import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
function Recipe() {
  return (
    <div className="h-auto xl:w-4/5 p-10 mt-4">
       {/* Title and Image with recipe intro*/}
        <div className="h-full flex xl:space-x-5 flex-col xl:flex-row space-y-5 xl:space-y-0">

          <div className="w-full xl:w-1/2 space-y-5  ">
            <p className="text-6xl font-bold" style={{fontFamily: 'sans'}}>Quiche Lorraine</p>
            <p className="text-xl italic">Quiche Lorraine is a classic French dish from the Lorraine region, 
              featuring a rich filling of eggs, cream, and lardons (bacon) in a buttery pastry crust.
              Quiche Lorraine is a classic French dish from the Lorraine region, 
              featuring a rich filling of eggs, cream, and lardons (bacon) in a buttery pastry crust.
              </p>

            <div className="flex text-lg space-x-10 items-end ">

              <div className=" flex flex-col rounded-xl  justify-center items-center">
                <AccessAlarmIcon 
                  fontSize='large'
                />
                <p className=''>45 min</p>
              </div>
              <div className=" flex flex-col rounded-xl  justify-center items-center">
                <PeopleIcon 
                  fontSize='large'
                />
                <p className=''>4 People</p>
              </div>
              <div className=" flex flex-col rounded-xl justify-center items-center">
                <AssessmentIcon 
                  fontSize='large'
                />
                <p className=''>Medium</p>
              </div>
            </div>


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