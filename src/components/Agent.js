import Draggable from 'react-draggable';

const Agent = ({ agent, onClick }) => {
  return (
    <Draggable>
      <img
        key={agent.name}
        src={agent.img}
        className='agent-image'
        alt={agent.number + ' ' + agent.name}
        onClick={onClick}
        number={agent.number}
      />
    </Draggable>
  );
};

export default Agent;
