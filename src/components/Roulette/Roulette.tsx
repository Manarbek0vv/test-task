import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Items from '../Items/Items';
import classes from './Roulette.module.scss';
import { IItem, initialItems } from '../../definitions/items';
import { chooseItem, generateItems } from '../../definitions/roulette';
import Modal from '../Modal/Modal';


export default function Roulette() {
    const [items, setItems] = useState<IItem[]>([])
    const [isPlay, setIsPlay] = useState(false)
    const [isResetting, setIsResetting] = useState(false)
    const [choosedItem, setChoosedItem] = useState<{ index: number; range: number; } | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const items = generateItems(initialItems)
        setItems(items)
    }, [])

    useEffect(() => {
        if (!isPlay) return

        const items = generateItems(initialItems)
        setItems(items)
        const result = chooseItem(items)
        setChoosedItem(result)

        setTimeout(() => {
            setIsPlay(false)
        }, 5000)
    }, [isPlay])

    useEffect(() => {
        if (isPlay) {
            const resetTimer = setTimeout(() => {
                setIsResetting(true)
            }, 50)

            const modalTimer = setTimeout(() => {
                setIsVisible(true)
            }, 4200)

            return () => {
                clearTimeout(resetTimer)
                clearTimeout(modalTimer)
            }
        }
    }, [isPlay])

    return (
        <div className={classes.container}>
            {isVisible &&
                <Modal setIsVisible={setIsVisible}>
                    <div className={classes.block} style={{ backgroundColor: choosedItem?.index ? items[choosedItem.index].color : 'white' }} />
                </Modal>}
            <Items isResetting={isResetting} items={items} choosedItem={choosedItem} />
            <Button isPlay={isPlay} setIsPlay={setIsPlay} setIsResetting={setIsResetting} />
        </div>
    )
}