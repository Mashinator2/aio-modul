import React, {useState} from 'react';
import styles from "./Select.module.css";

export default function Select({setSelectTitle, title, setOpen}) {
    const [active, setActive] = useState(false);
    const selectHandler = () => {
        setOpen(false)
        // setActive(!active);
        setSelectTitle(title)
    };

  return (
    <div 
        className={styles.select__item}
        onClick={selectHandler}
    >{title}</div>
  )
}
