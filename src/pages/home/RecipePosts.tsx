import { collection, getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";

function RecipePosts() {
    const [recipes, setRecipes] = useState<any>([]);
    const fetchRecipes = async () => {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipesList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setRecipes(recipesList);
    }
    const [opacityTImer, setOpacityTimer] = useState<boolean>(false);
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const changeOpactity = async () => {
        await delay(500);
        setOpacityTimer(true)
    };
    console.log(recipes)
    useEffect(() => {
        changeOpactity();
        fetchRecipes();
    }, []);

    return (
        <div className={`xl:w-5/6 p-5 gap-y-5 grid place-items-center
         xl:grid-cols-4
         2xl:grid-cols-6
         transition-opacity duration-1000
         h-5/6
         overflow-y-auto
         ${opacityTImer ? 'opacity-100' : 'opacity-0'}
         `}>
            {recipes?.map((recipe: any) => (
                <a className="transition duration-700 hover:scale-105 p-0 xl:p-6" href={`/recipe/${recipe.id}`}>
                    <img className="rounded-xl lg:w-52" style={{ borderRadius: 10, objectFit:"fill" }} src={recipe.imageUrl} />
                    <p className="font-serif text-lg px-1">
                        {recipe.title}
                    </p>
                </a>
            ))}
        </div>
    )
}

export default RecipePosts