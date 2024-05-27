import { useEffect, useState } from "react";

function RecipePosts() {
    const cards: string[] = [
        'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',
        'https://cdn.pickuplimes.com/cache/27/e0/27e0bfb15307055938ff0d8fcea00068.jpg',
        'https://cdn.pickuplimes.com/cache/ac/bf/acbfed5589d3a3b96884a491687566f7.jpg',
        'https://cdn.pickuplimes.com/cache/21/18/211886ca12104607a8c71a3bcef87960.jpg',
        'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',
        'https://cdn.pickuplimes.com/cache/27/e0/27e0bfb15307055938ff0d8fcea00068.jpg',
        'https://cdn.pickuplimes.com/cache/ac/bf/acbfed5589d3a3b96884a491687566f7.jpg',
        'https://cdn.pickuplimes.com/cache/21/18/211886ca12104607a8c71a3bcef87960.jpg',

    ];

    const [opacityTImer, setOpacityTimer] = useState<boolean>(false);
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const changeOpactity = async () => {
        await delay(500);
        setOpacityTimer(true)
    };

    useEffect(() => {
        changeOpactity()
    }, []);

    return (
        <div className={`w-full p-5 gap-y-5 grid place-items-center
         xl:grid-cols-4
         2xl:grid-cols-6
         transition-opacity duration-1000
         h-5/6
         overflow-y-auto
         ${opacityTImer ? 'opacity-100' : 'opacity-0'}
         `}>
            {cards?.map((card) => (
                <div className="transition duration-700 hover:scale-105 p-0 xl:p-6">
                    <img className="rounded-xl" style={{ borderRadius: 10 }} src={card} />
                    <p className="font-serif text-lg px-1">
                        Coconut curry and rice
                    </p>
                </div>
            ))}
        </div>
    )
}

export default RecipePosts