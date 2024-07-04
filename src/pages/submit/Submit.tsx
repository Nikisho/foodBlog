import { Input } from '@mui/material';
import { useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
	console.log(data)
	const filePickerRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setData((prevData: any) => ({
			...prevData,
			[name]: value
		}));
	};

	function handleClick(e: React.MouseEvent, difficulty: string) {
		e.preventDefault();
		setData((prevData: any) => ({
			...prevData,
			difficulty: difficulty
		}));
	};

	const uploadImageURL = async(e: any) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
			setData((prevData: any) => ({
				...prevData,
				imageUrl: e.target.files[0]
			}));
		}
	};

	const handleSubmit = async () => {

	}

	return (
		<div className='space-y-5 h-auto w-full lg:w-1/2 p-5 shadow-lg '>
			<p className='text-3xl  font-semibold'>Recipe Details</p>


			<div>
				<p className='font-semibold text-lg'>Title</p>
				<input className=' h-10 w-full border-1 border-gray-400 p-4 rounded-lg'
					placeholder='Example: Jacket Potatoes'
					value={data?.title}
					name='title'
					onChange={handleChange}
				>
				</input>
			</div>
			<div>
				<p className='font-semibold text-lg'>Description</p>
				<textarea className=' h-32 w-full  border-1 border-gray-400 p-4 rounded-lg'
					placeholder='Example: Jacket Potatoes'
					value={data?.description}
					name='description'
					onChange={handleChange}
				>
				</textarea>
			</div>

			<div className='flex flex-col md:flex-col space-y-4'>
				<div className=' flex w-1/2 rounded-xl shadow-lg bg-yellow-200 p-3 space-x-1'>
					<input type='number' className='w-1/3  px-3 bg-yellow-100 rounded-xl'
						value={data?.prepTime}
						name='prepTime'
						onChange={handleChange}
					/>

					<p className=''>Min</p>
				</div>
				<div className=' flex w-1/2 rounded-xl shadow-lg bg-yellow-200 p-3 space-x-1'>
					<input type='number' max={10} className='w-1/3  px-3 bg-yellow-100 rounded-xl'
						value={data?.servingSize}
						name='servingSize'
						onChange={handleChange}
					/>
					<p className=''>People</p>
				</div>
				<div className=' flex w-full justify-between space-x-1'>
					<button
						name='difficulty' className={`w-1/3 rounded-xl shadow-lg p-2 hover:scale-95 transition duration-700 ${data?.difficulty === 'beginner' ? 'bg-yellow-500' : 'bg-yellow-200'}`}
						onClick={(e) => handleClick(e, 'beginner')}
					>
						Beginner
					</button>
					<button name='difficulty' className={`w-1/3 rounded-xl shadow-lg p-2 hover:scale-95 transition duration-700 ${data?.difficulty === 'intermediate' ? 'bg-yellow-500' : 'bg-yellow-200'}`}
						onClick={(e) => handleClick(e, 'intermediate')}

					>
						<p>Intermediate</p>
					</button>
					<button name='difficulty' className={`w-1/3 rounded-xl shadow-lg p-2 hover:scale-95 transition duration-700 ${data?.difficulty === 'advanced' ? 'bg-yellow-500' : 'bg-yellow-200'}`}
						onClick={(e) => handleClick(e, 'advanced')}
					>
						<p>Advanced</p>
					</button>
				</div>
			</div>
			<button className='rounded-xl bg-amber-400 shadow-lg px-4 py-2'
				onClick={() => filePickerRef.current?.click()}
			>
				<input ref={filePickerRef}
					onChange={uploadImageURL}
					type="file"
					accept="image/png, image/jpeg"
					hidden
				/>
				<CloudUploadIcon/>
				<p>Upload image</p>
			</button>
		</div>
	)
}

export default Submit