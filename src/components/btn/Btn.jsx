import style from './Btn.module.css';

export function Btn(props) {
    const { title, color, size } = props;
    let colorClass = '';

    if (color === 'white') {
        colorClass = style.btnWhite;
    }
    if (color === 'green') {
        colorClass = style.btnGreen;
    }

    let sizeClass = '';
    if (size === 'small') {
        sizeClass = style.btnSmall;
    }

    return <a className={`${style.btn} ${colorClass} ${sizeClass}`} href="/">{title}</a>;
}