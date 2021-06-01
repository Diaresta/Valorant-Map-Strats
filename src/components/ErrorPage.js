import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div id='error'>
      <img src='/images/Misc-Images/error-logo.png' alt='error' />
      <h1>Connection Error</h1>
      <h2>
        <span style={{ color: '#ff4655' }}>Vandal</span> has encountered a
        connection error.
        <br />
        Please return <Link to='/home'>home</Link> to reconnect.
      </h2>
      <Link to='/home'>
        <button className='btn map-btn'>Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
