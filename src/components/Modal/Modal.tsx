import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';

interface PageProps {
    children: React.ReactNode;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({
    children,
    setIsVisible
}: PageProps) {

    return createPortal(
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {children}
                <button className={classes.button}
                    onClick={() => setIsVisible(false)}>
                    Закрыть
                </button>
            </div>
        </div>,
        document.getElementById('modal') as HTMLDivElement
    )
}