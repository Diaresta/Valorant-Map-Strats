import Draggable from 'react-draggable';
import Agents from './Agents';
import { stopImgDrag } from './Agent';

const Abilities = ({ agentInfo, start, style }) => {
  return (
    <>
      {agentInfo.slice(start, start + 1).map((agent) => (
        <div>
          <Draggable>
            <img
              key='ability0'
              src={agent.abil_0}
              className='ability-image'
              alt='ability 0'
              style={style}
              onDragStart={stopImgDrag}
            />
          </Draggable>

          <Draggable>
            <img
              key='ability1'
              src={agent.abil_1}
              className='ability-image'
              alt='ability 1'
              style={style}
              onDragStart={stopImgDrag}
            />
          </Draggable>

          <Draggable>
            <img
              key='ability2'
              src={agent.abil_2}
              className='ability-image'
              alt='ability 2'
              style={style}
              onDragStart={stopImgDrag}
            />
          </Draggable>

          <Draggable>
            <img
              key='ability3'
              src={agent.abil_3}
              className='ability-image'
              alt='ability 3'
              style={style}
              onDragStart={stopImgDrag}
            />
          </Draggable>
        </div>
      ))}
    </>
  );
};

export default Abilities;
