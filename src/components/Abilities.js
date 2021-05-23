import Draggable from 'react-draggable';
import Agents from './Agents';

const Abilities = ({ agentInfo, start }) => {
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
            />
          </Draggable>

          <Draggable>
            <img
              key='ability1'
              src={agent.abil_1}
              className='ability-image'
              alt='ability 1'
            />
          </Draggable>

          <Draggable>
            <img
              key='ability2'
              src={agent.abil_2}
              className='ability-image'
              alt='ability 2'
            />
          </Draggable>

          <Draggable>
            <img
              key='ability3'
              src={agent.abil_3}
              className='ability-image'
              alt='ability 3'
            />
          </Draggable>
        </div>
      ))}
    </>
  );
};

export default Abilities;
