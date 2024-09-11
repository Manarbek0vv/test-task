import { IItem } from "./items";

export function shuffle<T>(array: Array<T>) {
    return [...array].sort(() => Math.random() - 0.5);
}

export const generateItems = (items: IItem[]) => {
    const generatedItems: IItem[] = []

    items.forEach(item => {
        for (let i = 0; i < item.raiting * 5; i++) {
            generatedItems.push(item)
        }
    })

    return shuffle(generatedItems)
}

export const chooseItem = (items: IItem[]) => {
    const choosedItem = Math.floor(items.length / 2)
    const range = choosedItem * 75 + (choosedItem - 1) * 10 + (Math.random() * 75)

    return { index: choosedItem, range }
}