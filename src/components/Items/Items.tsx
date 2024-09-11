import { IItem } from '../../definitions/items';
import Arrow from '../Arrow/Arrow';
import classes from './Items.module.scss';

interface ItemsProps {
    isResetting: boolean;
    items: IItem[];
    choosedItem: { index: number; range: number; } | null;
}

export default function Items({
    isResetting,
    items,
    choosedItem
}: ItemsProps) {

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <ul
                    style={{
                        left: isResetting ? `-${choosedItem?.range ? choosedItem.range - 400 : 0}px` : '0px',
                        transition: isResetting ? '4s cubic-bezier(0, 0.32, 0.05, 1)' : 'none'
                    }}
                    className={classes.items}>
                    {items.map((item) =>
                        <div
                            key={Math.random()}
                            className={classes.item}
                            style={{
                                backgroundColor: item.color,
                            }}
                        />

                    )}
                </ul>
            </div>

            <Arrow />
        </div>
    )
}