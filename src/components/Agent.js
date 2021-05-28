import Draggable from 'react-draggable';

// Drag fix for Firefox
export const stopImgDrag = (e) => {
  e.preventDefault();
};

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
        onDragStart={stopImgDrag}
      />
    </Draggable>
  );
};

export default Agent;
