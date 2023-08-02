import React from 'react'
import classNames from "./Card.module.css";
import Button from '../Button/Button';

type CardProps = {
  img: string;
  title: string;
  price: number;
  onClick: () => void;
  label: string;
}

export default function Card({ img, title, price, onClick, label }: CardProps) {
  return (
    <div className={classNames.card}>
      <img src={img} alt={title} />
      <p className={classNames.title}>{title}</p>
      <div className={classNames.container}>
        <p>{label}</p>
        <span>{price} USD</span>
      </div>
      <div className={classNames.button}>
        <Button label='Comprar Ahora' shade='900' />
      </div>
    </div>
  )
}
