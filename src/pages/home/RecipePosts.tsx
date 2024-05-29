import { useEffect, useState } from "react";

function RecipePosts() {
    const cards = [
        {link:'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',id: 1},
        {link:'https://cdn.pickuplimes.com/cache/27/e0/27e0bfb15307055938ff0d8fcea00068.jpg',id: 2},
        {link:'https://cdn.pickuplimes.com/cache/ac/bf/acbfed5589d3a3b96884a491687566f7.jpg',id: 3},
        {link:'https://cdn.pickuplimes.com/cache/21/18/211886ca12104607a8c71a3bcef87960.jpg',id: 4},
        {link:'https://cdn.pickuplimes.com/cache/6c/6c/6c6ce42cc549d2cb368e59424388cf36.jpg',id: 5},
        {link:'https://cdn.pickuplimes.com/cache/27/e0/27e0bfb15307055938ff0d8fcea00068.jpg',id: 6},
        {link:'https://cdn.pickuplimes.com/cache/ac/bf/acbfed5589d3a3b96884a491687566f7.jpg',id: 7},
        {link:'https://cdn.pickuplimes.com/cache/21/18/211886ca12104607a8c71a3bcef87960.jpg',id: 8},

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
        <div className={`xl:w-5/6 p-5 gap-y-5 grid place-items-center
         xl:grid-cols-4
         2xl:grid-cols-6
         transition-opacity duration-1000
         h-5/6
         overflow-y-auto
         ${opacityTImer ? 'opacity-100' : 'opacity-0'}
         `}>
            {cards?.map((card) => (
                <a className="transition duration-700 hover:scale-105 p-0 xl:p-6" href={`/recipe/${card.id}`}>
                    <img className="rounded-xl" style={{ borderRadius: 10 }} src={card.link} />
                    <p className="font-serif text-lg px-1">
                        Filo tart
                    </p>
                </a>
            ))}
        </div>
    )
}

export default RecipePosts