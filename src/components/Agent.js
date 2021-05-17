const Agent = ({ agent, onClick }) => {
  return (
    <img
      key={agent.name}
      src={agent.img}
      className='agent-image'
      alt={agent.number + ' ' + agent.name}
      onMouseDown={onClick}
      number={agent.number}
    />
  );
};

export default Agent;
