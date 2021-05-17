const Agent = ({ agent }) => {
  return (
    <img
      key={agent.name}
      src={agent.img}
      className='agent-image'
      alt={agent.name}
    />
  );
};

export default Agent;
