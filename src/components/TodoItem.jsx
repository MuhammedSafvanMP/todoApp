import React from 'react'
import style from './todoItem.module.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function TodoItem({item}) {
  return (
    <div className={style.list_item}>
        <li className= {style.list}>{item} <span className={style.delete}><FaEdit /> <MdDelete /> </span></li>
    </div>
  )
}
