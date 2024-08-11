import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Ingredients from './Ingredients';
import Method from './Method';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"; 
import {db} from '../../../firebase'; 
import { useEffect, useState } from 'react';

function Recipe() {
  const { id } = useParams()
  const [recipeData, setRecipeData] = useState<any>();
  const fetchDoc = async () => {
    const docRef = doc(db, "recipes", `${id}`);
    try {
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data())
      setRecipeData(docSnap.data())
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchDoc();
  },[])
  return (
    <>
    {
      recipeData && (
        <div className="h-auto xl:w-4/5 p-5 mt-4">
        {/* Title and Image with recipe intro*/}
        <div className="h-full flex xl:space-x-5 flex-col xl:flex-row space-y-5 xl:space-y-0 justify-center">
          <div className="w-full xl:w-2/3 2xl:w-1/3 space-y-10 ">
            <p className="text-6xl font-bold text-amber-900" style={{ fontFamily: 'unset' }}>{recipeData.title}</p>
            <p className="text-lg italic">
              {recipeData.description}
            </p>
            <div className="w-full xl:w-1/2 2xl:w-1/3 xl:p-5 block lg:hidden">
              <img
                src={recipeData.imageUrl}
                className="rounded-xl"
              />
            </div>
  
            <div className="flex w-full justify-center text-md space-x-1 xl:space-x-10 items-end text-gray-700">
              <div className=" shadow-lg  bg-amber-300 p-3  w-1/3 flex flex-col rounded-xl  justify-center items-center">
                <AccessAlarmIcon
                  fontSize='large'
                />
                <p className=''>{recipeData.prepTime} min</p>
              </div>
              <div className=" shadow-lg bg-amber-300 p-3 w-1/3 flex flex-col rounded-xl  justify-center items-center">
                <PeopleIcon
                  fontSize='large'
                />
                <p className=''>{recipeData.servingSize} People</p>
              </div>
              <div className=" shadow-lg bg-amber-300 p-3 w-1/3 flex flex-col rounded-xl justify-center items-center">
                <AssessmentIcon
                  fontSize='large'
                />
                <p className=''>{recipeData.difficulty}</p>
              </div>
            </div>
            <Ingredients ingredients={recipeData.ingredients} />
            <Method steps={recipeData.Method} />
  
          </div>
  
          <div className="w-full xl:w-1/2 2xl:w-1/3 xl:p-5 hidden lg:block">
            <img
              src={recipeData.imageUrl}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
  
      )
    }
    </>
  )
}

export default Recipe