import classes from './Button.module.scss';

interface ButtonProps {
    isPlay: boolean;
    setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
    setIsResetting: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({
    isPlay,
    setIsPlay,
    setIsResetting
}: ButtonProps) {

    return (
        <button
            className={classes.button}
            onClick={() => {
                if (!isPlay) {
                    setIsPlay(true)
                    setIsResetting(false)
                }
            }}>
            {!isPlay && 'Крутить'}
            {isPlay && 'Ожидание'}
        </button>
    )
}