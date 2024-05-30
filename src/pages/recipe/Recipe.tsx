import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Ingredients from './Ingredients';
import Method from './Method';
import { useParams } from 'react-router-dom';

function Recipe() {

  const {id} = useParams()
  console.log(id)


  const data = {
    title: 'Quiche Lorraine',
    description: "Quiche Lorraine is a classic French dish from the Lorraine region,\
    featuring a rich filling of eggs, cream, and lardons (bacon) in a buttery pastry crust.\
    Quiche Lorraine is a classic French dish from the Lorraine region, \
    featuring a rich filling of eggs, cream, and lardons (bacon) in a buttery pastry crust",
    imageUrl: 'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',
    prepTime: 45,
    servingSize: 4,
    difficulty: 'Intermediate',
    ingredients: [
      {
        name: 'Tray bake',
        subIngredients: [
          '3 medium sweet potatoes, cut into 1 cm cubes',
          '1 medium red onion, sliced',
          '4 cloves garlic, peel left on'
        ]
      },
      {
        name: 'Tray bake',
        subIngredients: [
          '3 medium sweet potatoes, cut into 1 cm cubes',
          '1 medium red onion, sliced',
          '4 cloves garlic, peel left on'
        ]
      },
      {
        name: 'Tray bake',
        subIngredients: [
          '3 medium sweet potatoes, cut into 1 cm cubes',
          '1 medium red onion, sliced',
          '4 cloves garlic, peel left on'
        ]
      }
    ],
    steps: [
      'Preheat the oven to 410°F (210°C)*. Add all the tray bake ingredients to a baking tray and toss to coat.',
      'Bake for 25 minutes, or until the potatoes are fully cooked through. Stir once halfway.',
      'Meanwhile, in a large bowl, add the kale and drizzle over the olive oil. Using your hands, massage the kale for 1 - 2 minutes to soften it.',
      'Add the dressing ingredients to a separate medium bowl. Peel the roasted garlic cloves and mash them into the bowl.'
    ]
  }

  return (

    <div className="h-auto xl:w-4/5 p-5 mt-4">
      {/* Title and Image with recipe intro*/}
      <div className="h-full flex xl:space-x-5 flex-col xl:flex-row space-y-5 xl:space-y-0">
        <div className="w-full xl:w-1/2 space-y-5">
          <p className="text-6xl font-bold text-amber-900" style={{ fontFamily: 'unset' }}>{data.title}</p>
          <p className="text-lg italic">
            {data.description}
          </p>

          <div className="flex w-full justify-center text-md space-x-1 xl:space-x-10 items-end text-amber-50">
            <div className=" shadow-lg  bg-amber-300 p-3  w-1/3 flex flex-col rounded-xl  justify-center items-center">
              <AccessAlarmIcon
                fontSize='large'
              />
              <p className=''>{data.prepTime} min</p>
            </div>
            <div className=" shadow-lg bg-amber-300 p-3 w-1/3 flex flex-col rounded-xl  justify-center items-center">
              <PeopleIcon
                fontSize='large'
              />
              <p className=''>{data.servingSize} People</p>
            </div>
            <div className=" shadow-lg bg-amber-300 p-3 w-1/3 flex flex-col rounded-xl justify-center items-center">
              <AssessmentIcon
                fontSize='large'
              />
              <p className=''>{data.difficulty}</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 xl:p-5">
          <img
            src={data.imageUrl}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Ingredients */}
      <Ingredients ingredients={data.ingredients} />

      {/* Method */}
      <Method steps={data.steps} />
    </div>
  )
}

export default Recipe