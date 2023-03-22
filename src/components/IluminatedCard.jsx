import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/IluminatedCard.module.css';
import icons from './icons';

export default function IluminatedCard({ data: { name, url }, data }) {
  const title = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
  return (
    <Link
      className={ style['iluminated-card'] }
      target="_blank"
      rel="noopener noreferrer"
      to={ url }
    >
      <div className={ style.light } />
      <div className={ style.container }>
        {
          icons[name]
        }
        <h1 className={ style['iluminated-card-title'] }>
          { data.fantasy_name || title }
        </h1>
      </div>
    </Link>
  );
}

IluminatedCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    fantasy_name: PropTypes.string,
  }).isRequired,
};
