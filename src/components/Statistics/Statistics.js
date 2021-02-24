import React from 'react';
import styles from './Statistics.module.css';
import getRandomColor from './colorGenerator';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(el => {
          return (
            <li
              className={styles.item}
              key={el.id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
