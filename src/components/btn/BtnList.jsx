import { Btn } from './Btn';
import style from './Btn.module.css';

export function BtnList() {
    return (
        <div className={style.btnList}>
            <Btn title="Go home" />
            <Btn title="Back" color="white" />
        </div>
    );
}