import React, {useState} from "react";
import Selcon from "../../components/Selcon/Selcon";
import styles from "./MainOne.module.css";

function MainOne()  {


    // const selectArr = ['1111','2222','3333','4444'];

    // const [selectTitle, setSelectTitle] =useState('123123')
  
    // const [isOpen, setOpen] = useState(false);
    // const handleOpen = () => setOpen(!isOpen);

  return (
    <div className={styles.con}>
      <h1 className={styles.title}>Умный подбор финансовых услуг</h1>
<Selcon/>
    </div>

  );
  

}




export default MainOne;
