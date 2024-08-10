import { useRef, useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { db } from '../../../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString } from 'firebase/storage';
interface dataProps {
	title: string | undefined;
	description: string;
	imageUrl: any;
	prepTime: number;
	servingSize: number;
	difficulty: string;
	ingredients: string[];
	steps: string[]
}

const Submit = () => {
	const [data, setData] = useState<dataProps>({
		ingredients: [],
		steps: [],
		title: '',
		description: '',
		imageUrl: null,
		prepTime: 0,
		servingSize: 0,
		difficulty: '',
	});
	console.log(data)
	const filePickerRef = useRef<HTMLInputElement>(null);
	const [newIngredient, setNewIngredient] = useState<any>('');
	const [newStep, setNewStep] = useState<any>('');


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

	const uploadImageURL = async (e: any) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onload = (readerEvent: any) => {
			setData((prevData: any) => ({
				...prevData,
				imageUrl: readerEvent.target.result
			}));
		}
	};

	const handleInputChange = (e: any) => {
		setNewIngredient(e.target.value);
	};

	const handleInputChangeMethod = (e: any) => {
		setNewStep(e.target.value);
	};

	const handleAddIngredient = () => {
		if (newIngredient.trim() !== '') {
			setData((prevData: any) => ({
				...prevData,
				ingredients: [
					...prevData.ingredients,
					newIngredient
				]
			}));
			setNewIngredient('');
		}
	};
	const handleAddStep = () => {
		if (newStep.trim() !== '') {
			setData((prevData: any) => ({
				...prevData,
				steps: [
					...prevData.steps,
					newStep
				]
			}));
			setNewStep('');
		}
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!data) { return };
		try {

			await addDoc(collection(db, "recipes"), {
				Method: data.steps,
				description: data.description,
				title: data.title,
				difficulty: data.difficulty,
				ingredients: data.ingredients,
				prepTime: data.prepTime,
				servingSize: data.servingSize
			})
				.then((document) => {
					if (data.imageUrl) {
						const storage = getStorage();
						const storageRef = ref(storage, `${document.id}`);
						const uploadTask = uploadString(storageRef, data.imageUrl, 'data_url');
						const uploadTaskBytes = uploadBytesResumable(storageRef, data.imageUrl);
						uploadTaskBytes.on(
							'state_changed',
							null,
							(error) => console.error(error),
							async () => {
								await getDownloadURL(ref(storage, `${document.id}`)).then((url) => {
									setDoc(doc(db, "recipes", document.id), {
										imageUrl: url,
										id: document.id
									}, { merge: true })
								})
							}
						)
					};
				})


		} catch (error) {
			throw error;
		}

	}

	return (
		<div className=' space-y-5 h-auto w-full lg:w-1/2 p-5 shadow-lg overflow-y-scroll '>
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
				<CloudUploadIcon />
				<p>Upload image</p>
			</button>
			<div className='flex flex-col space-y-20'>

				<div>
					<p className='font-semibold text-lg'>Ingredients</p>
					<ul>

						{
							data?.ingredients?.map((ingredient: any) => (
								<li>
									{ingredient}
								</li>
							))
						}
					</ul>
					<div className=" h-5 w-32 border-1 border-gray-400  rounded-lg">
						<input
							className='p-2 rounded-xl my-3'
							type="text"
							placeholder="Add ingredient"
							value={newIngredient}
							onChange={handleInputChange}
						/>
						<button className='px-2 rounded-full my-2 bg-amber-300' onClick={handleAddIngredient}>&#x2b; add</button>
					</div>


				</div>
				<div className=''>
					<p className='font-semibold text-lg'>Method</p>
					<ul>

						{
							data?.steps?.map((step: any) => (
								<li>
									{step}
								</li>
							))
						}
					</ul>
					<div className=" h-5 w-32 border-1 border-gray-400  rounded-lg">
						<input
							className='p-2 rounded-xl my-3'
							type="text"
							placeholder="Add ingredient"
							value={newStep}
							onChange={handleInputChangeMethod}
						/>
						<button
							className='px-2 rounded-full my-2 bg-amber-300'
							onClick={handleAddStep}>&#x2b; add</button>
					</div>


				</div>
				<div>
					<button
						onClick={handleSubmit}
						className='p-2 bg-blue-400 text-white font-semibold hover:scale-95 transition duration-500'>
						submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default Submit