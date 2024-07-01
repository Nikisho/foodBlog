import React from 'react'

interface IngredientsProps {
    ingredients: {
        name: String
        subIngredients: Array<string>
    }[]
}

const Ingredients: React.FC<IngredientsProps> =  ({ingredients}) => {
    return (
        <div className='space-y-5 mt-5 '>
            <p className='text-4xl font-semibold'>Ingredients</p>
            {
               ingredients.map((ingredient) => (
                    <div key={ingredients.indexOf(ingredient)}>
                        <p className='text-xl font-semibold'>{ingredient.name}</p>
                        <ul className='list-disc list-inside indent-5 '>
                            {ingredient.subIngredients.map((subingredient) => (
                                <li>
                                    {subingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Ingredients