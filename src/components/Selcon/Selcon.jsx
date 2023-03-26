import React from 'react'
import { useState } from 'react';
import Select from '../UI/Select/Select';
import styles from './Selcon.module.css'

export default function Selcon() {
    const selectArr = ['Автомобиль','Вертолет','Самолет','Дом']
    const [selectTitle,setSelectTitle] = useState('Автомобиль')
    const [isOpen,setOpen] = useState(false)
    const handleOpen = () => setOpen(!isOpen)
  return (
    <div  className={styles.container}>
      <div className={styles.select_con}>
          <p className={styles.con_title}>Какая цель</p>

          <div className={styles.selet}>
            <div className={styles.select__header}  onClick={handleOpen}>
              <span className={styles.select__current} >{selectTitle}</span>
              <div className={styles.select__icon}>
                <img src="../img/arrow.svg" alt="" />
              </div>
            </div>

            {isOpen && 
            (
              <div className={styles.select__body}>
              {
                selectArr.map((select) => <Select setOpen={setOpen} title={select} setSelectTitle={setSelectTitle} />)
              }

            </div>
          )}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.select_con}>
          <p className={styles.con_title}>Какая цель</p>

          <div className={styles.selet}>
            <div className={styles.select__header}  onClick={handleOpen}>
              <span className={styles.select__current} >{selectTitle}</span>
              <div className={styles.select__icon}>
                <img src="../img/arrow.svg" alt="" />
              </div>
            </div>

            {isOpen && 
            (
              <div className={styles.select__body}>
              {
                selectArr.map((select) => <Select setOpen={setOpen} title={select} setSelectTitle={setSelectTitle} />)
              }

            </div>
          )}
          </div>
        </div>
        <div className={styles.line}></div>

        <button id={styles.button}>Подобрать карту</button>
    </div>
  )
}
