const Esports = ({ apiData, loading }) => {
  return loading ? (
    <h1 style={{ color: 'white' }}>Loading...</h1>
  ) : (
    <div style={{ color: 'white' }}>
      {apiData.map((user) => {
        const { name, url } = user;
        return (
          <li>
            <p>{name}</p>
            <p>{url}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Esports;
