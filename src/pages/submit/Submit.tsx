import React, { useState } from 'react'

interface dataProps {
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  servingSize: number;
  difficulty: string;
  ingredients: {
    name: string;
    subIngredients: string[]
  }[];
  steps: string[]
}

const Submit = () => {
  const [data, setData] = useState<dataProps>();

  
  return (
    <div>

    </div>
  )
}

export default Submit