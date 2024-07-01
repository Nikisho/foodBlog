import { Input } from '@mui/material';
import { useState } from 'react'

interface dataProps {
	title: string | undefined;
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
	console.log(data?.title)

	const handleInputChange = (event: any) => {
        setData((prevState: any) => {
			return({
				...prevState,
				title: event.target.value
			})
		});
    };
	const handleSubmit = async () => {

	}

	return (
		<div className='space-y-5 justify-start h-screen w-full p-5'>
			<p className='text-3xl  font-semibold'>Recipe Details</p>


			<div>
				<p className='font-semibold text-lg'>Title</p>
				<input className=' h-10 w-full xl:w-1/4  border-1 border-gray-400 p-4 rounded-lg'
					placeholder='Example: Jacket Potatoes'
					value={data?.title}
					onChange={handleInputChange}
				>
				</input>
			</div>
			<div>
				<p className='font-semibold text-lg'>Description</p>
				<textarea className=' h-32 w-full xl:w-1/4  border-1 border-gray-400 p-4 rounded-lg'
					placeholder='Example: Jacket Potatoes'
					value={data?.title}
					onChange={handleInputChange}
				>
				</textarea>
			</div>
		</div>
	)
}

export default Submit