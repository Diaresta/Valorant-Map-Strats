import PropTypes from 'prop-types';

const Header = ({ title, blurb }) => {
  return (
    <header>
      <div id='header-left'>
        <a href='/'>
          <h1 alt='Title and Home Button'>{title}</h1>
        </a>
        <h3>{blurb}</h3>
      </div>
      <div id='header-right'>
        <a
          href='https://github.com/Diaresta/Valorant-Map-Strats'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github fa-lg' alt='Github Link' />
        </a>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: 'Vandal',
  blurb: 'Valorant Strat Planner',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
