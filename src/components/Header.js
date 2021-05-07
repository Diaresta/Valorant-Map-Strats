import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>
        <p>Valorant Strat Planner</p>
      </div>
      <div>
        <a
          href='https://github.com/Diaresta/Valorant-Map-Strats'
          target='_blank'
        >
          Github
        </a>
        <a
          href='https://github.com/Diaresta/Valorant-Map-Strats'
          target='_blank'
        >
          Home
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
