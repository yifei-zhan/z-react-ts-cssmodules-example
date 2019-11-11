import React from 'react';
import styles from './insurance-list.module.less';

interface Insurance {
  name: string;
  price: number;
}

export function InsuranceList() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {fakeList.map((insurance, index) => (
          <div className={styles['insurance-item']} key={`${insurance.name}${index}`}>
            <div className={styles['insurance-item__name']}>{insurance.name}</div>
            <div className={styles['insurance-item__price']}>{insurance.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const generatePrice = () => {
  return +(Math.random() * (300 - 100) + 100).toFixed(3);
}
const fakeList: Insurance[] = [
  {name: 'VHV', price: generatePrice()},
  {name: 'TK', price: generatePrice()},
  {name: 'DAK', price: generatePrice()},
  { name: 'VHV', price: generatePrice() },
  { name: 'TK', price: generatePrice() },
  { name: 'DAK', price: generatePrice() },
  { name: 'VHV', price: generatePrice() },
  { name: 'TK', price: generatePrice() },
  { name: 'DAK', price: generatePrice() },
  { name: 'VHV', price: generatePrice() },
  { name: 'TK', price: generatePrice() },
  { name: 'DAK', price: generatePrice() },
]