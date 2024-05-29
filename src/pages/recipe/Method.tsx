
interface MethodProps {
    steps: Array<String>
}

function Method({ steps }: MethodProps) {
    return (
        <div className='space-y-5 xl:w-1/2 my-5'>
            <p className='text-4xl font-semibold'>Method</p>

            <ol className='list-decimal list-inside space-y-2 text-amber-900 '>
                {steps.map((step) => (
                    <li key={steps.indexOf(step)}>{step}</li>
                ))}
            </ol>
        </div>
    )
}

export default Method