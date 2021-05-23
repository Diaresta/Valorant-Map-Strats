import Draggable from 'react-draggable';

const Agent = ({ agent, onClick, style }) => {
  return (
    <Draggable>
      <img
        key={agent.name}
        src={agent.img}
        className='agent-image'
        alt={agent.number + ' ' + agent.name}
        onClick={onClick}
        number={agent.number}
        style={style}
      />
    </Draggable>
  );
};

export default Agent;
