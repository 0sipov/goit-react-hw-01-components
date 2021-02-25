import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from './colorGenerator';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
