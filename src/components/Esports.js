import { Link } from 'react-router-dom';

const Esports = ({ apiData, loading }) => {
  return loading ? (
    <h1 style={{ color: 'white' }}>Loading...</h1>
  ) : (
    <div style={{ color: 'white' }}>
      <h1>
        eSports Match Portal Coming Soon! <br />
        <i style={{ color: '#ff4655' }} class='far fa-smile'></i>
      </h1>
      <Link to='/home'>
        <button className='btn map-btn'>Home</button>
      </Link>
      {/* {apiData.map((user) => {
        const { name, url } = user;
        return (
          <li key={name}>
            <p>{name}</p>
            <p>{url}</p>
          </li>
        );
      })} */}
    </div>
  );
};

export default Esports;
