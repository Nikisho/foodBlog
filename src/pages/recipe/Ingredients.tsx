import React from 'react'

interface IngredientsProps {
    ingredients: string[]
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredients }) => {
    return (
        <div className='space-y-5 mt-5 '>
            <p className='text-4xl font-semibold'>Ingredients</p>
            <ul className='list-disc list-inside indent-5 '>
            {
                ingredients.map((ingredient) => (
                    <div key={ingredients.indexOf(ingredient)}>
                        <li>
                            {ingredient}
                        </li>
                    </div>
                ))
            }
        </ul>

        </div >
    )
}

export default Ingredients