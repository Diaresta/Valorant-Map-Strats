import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <div id='header-left'>
        <a href='/'>
          <h1 alt='Title and Home Button'>{title}</h1>
        </a>
        <h3>Valorant Strat Planner</h3>
      </div>
      <div id='header-right'>
        <a
          href='https://github.com/Diaresta/Valorant-Map-Strats'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github fa-lg' />
        </a>
      </div>
      {/* <img src={process.env.PUBLIC_URL + '/shine-logo.png'} alt='reee' /> */}
    </header>
  );
};

Header.defaultProps = {
  title: 'Vandal',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
