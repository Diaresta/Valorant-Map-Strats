import { useState } from 'react';
import Draggable from 'react-draggable';
import AgentImage from './AgentImage';
import Abilities from './Abilities';

const Agents = () => {
  const attackDefend = () => {
    console.log('reee');
    const agentImages = document.getElementsByClassName('agent-image');
    for (let i = 0; i < agentImages.length; i++) {
      //   agentImages.style.border = '5px solid red';
    }
  };

  const [agentInfo, setAgent] = useState([
    {
      number: 0,
      name: 'Astra',
      img: '/images/Agent-Images/Astra/Astra.png',
      abil_0: '/images/Agent-Images/Astra/Abil-0.png',
      abil_1: '/images/Agent-Images/Astra/Abil-1.png',
      abil_2: '/images/Agent-Images/Astra/Abil-2.png',
      abil_3: '/images/Agent-Images/Astra/Abil-3.png',
    },
    {
      number: 1,
      name: 'Breach',
      img: '/images/Agent-Images/Breach/Breach.png',
      abil_0: '/images/Agent-Images/Breach/Abil-0.png',
      abil_1: '/images/Agent-Images/Breach/Abil-1.png',
      abil_2: '/images/Agent-Images/Breach/Abil-2.png',
      abil_3: '/images/Agent-Images/Breach/Abil-3.png',
    },
    {
      number: 2,
      name: 'Brimstone',
      img: '/images/Agent-Images/Brimstone/Brimstone.png',
      abil_0: '/images/Agent-Images/Brimstone/Abil-0.png',
      abil_1: '/images/Agent-Images/Brimstone/Abil-1.png',
      abil_2: '/images/Agent-Images/Brimstone/Abil-2.png',
      abil_3: '/images/Agent-Images/Brimstone/Abil-3.png',
    },
    {
      number: 3,
      name: 'Cypher',
      img: '/images/Agent-Images/Cypher/Cypher.png',
      abil_0: '/images/Agent-Images/Cypher/Abil-0.png',
      abil_1: '/images/Agent-Images/Cypher/Abil-1.png',
      abil_2: '/images/Agent-Images/Cypher/Abil-2.png',
      abil_3: '/images/Agent-Images/Cypher/Abil-3.png',
    },
    {
      number: 4,
      name: 'Jett',
      img: '/images/Agent-Images/Jett/Jett.png',
      abil_0: '/images/Agent-Images/Jett/Abil-0.png',
      abil_1: '/images/Agent-Images/Jett/Abil-1.png',
      abil_2: '/images/Agent-Images/Jett/Abil-2.png',
      abil_3: '/images/Agent-Images/Jett/Abil-3.png',
    },
    {
      number: 5,
      name: 'Killjoy',
      img: '/images/Agent-Images/Killjoy/Killjoy.png',
      abil_0: '/images/Agent-Images/Killjoy/Abil-0.png',
      abil_1: '/images/Agent-Images/Killjoy/Abil-1.png',
      abil_2: '/images/Agent-Images/Killjoy/Abil-2.png',
      abil_3: '/images/Agent-Images/Killjoy/Abil-3.png',
    },
    {
      number: 6,
      name: 'Omen',
      img: '/images/Agent-Images/Omen/Omen.png',
      abil_0: '/images/Agent-Images/Omen/Abil-0.png',
      abil_1: '/images/Agent-Images/Omen/Abil-1.png',
      abil_2: '/images/Agent-Images/Omen/Abil-2.png',
      abil_3: '/images/Agent-Images/Omen/Abil-3.png',
    },
    {
      number: 7,
      name: 'Phoenix',
      img: '/images/Agent-Images/Phoenix/Phoenix.png',
      abil_0: '/images/Agent-Images/Phoenix/Abil-0.png',
      abil_1: '/images/Agent-Images/Phoenix/Abil-1.png',
      abil_2: '/images/Agent-Images/Phoenix/Abil-2.png',
      abil_3: '/images/Agent-Images/Phoenix/Abil-3.png',
    },
    {
      number: 8,
      name: 'Raze',
      img: '/images/Agent-Images/Raze/Raze.png',
      abil_0: '/images/Agent-Images/Raze/Abil-0.png',
      abil_1: '/images/Agent-Images/Raze/Abil-1.png',
      abil_2: '/images/Agent-Images/Raze/Abil-2.png',
      abil_3: '/images/Agent-Images/Raze/Abil-3.png',
    },
    {
      number: 9,
      name: 'Reyna',
      img: '/images/Agent-Images/Reyna/Reyna.png',
      abil_0: '/images/Agent-Images/Reyna/Abil-0.png',
      abil_1: '/images/Agent-Images/Reyna/Abil-1.png',
      abil_2: '/images/Agent-Images/Reyna/Abil-2.png',
      abil_3: '/images/Agent-Images/Reyna/Abil-3.png',
    },
    {
      number: 10,
      name: 'Sage',
      img: '/images/Agent-Images/Sage/Sage.png',
      abil_0: '/images/Agent-Images/Sage/Abil-0.png',
      abil_1: '/images/Agent-Images/Sage/Abil-1.png',
      abil_2: '/images/Agent-Images/Sage/Abil-2.png',
      abil_3: '/images/Agent-Images/Sage/Abil-3.png',
    },
    {
      number: 11,
      name: 'Skye',
      img: '/images/Agent-Images/Skye/Skye.png',
      abil_0: '/images/Agent-Images/Skye/Abil-0.png',
      abil_1: '/images/Agent-Images/Skye/Abil-1.png',
      abil_2: '/images/Agent-Images/Skye/Abil-2.png',
      abil_3: '/images/Agent-Images/Skye/Abil-3.png',
    },
    {
      number: 12,
      name: 'Sova',
      img: '/images/Agent-Images/Sova/Sova.png',
      abil_0: '/images/Agent-Images/Sova/Abil-0.png',
      abil_1: '/images/Agent-Images/Sova/Abil-1.png',
      abil_2: '/images/Agent-Images/Sova/Abil-2.png',
      abil_3: '/images/Agent-Images/Sova/Abil-3.png',
    },
    {
      number: 13,
      name: 'Viper',
      img: '/images/Agent-Images/Viper/Viper.png',
      abil_0: '/images/Agent-Images/Viper/Abil-0.png',
      abil_1: '/images/Agent-Images/Viper/Abil-1.png',
      abil_2: '/images/Agent-Images/Viper/Abil-2.png',
      abil_3: '/images/Agent-Images/Viper/Abil-3.png',
    },
    {
      number: 14,
      name: 'Yoru',
      img: '/images/Agent-Images/Yoru/Yoru.png',
      abil_0: '/images/Agent-Images/Yoru/Abil-0.png',
      abil_1: '/images/Agent-Images/Yoru/Abil-1.png',
      abil_2: '/images/Agent-Images/Yoru/Abil-2.png',
      abil_3: '/images/Agent-Images/Yoru/Abil-3.png',
    },
  ]);

  const [ability, setAbility] = useState(agentInfo[0].number);

  const onClickAbility = (e) => {
    let number = e.target.alt.split(' ');
    console.log(number[0]);
    setAbility(agentInfo[number[0]].number);
  };

  return (
    <div id='agent-skill-container'>
      <div>
        <button id='attack-btn' className='btn draw-btn' onClick={attackDefend}>
          Attack
        </button>
        <button id='defend-btn' className='btn draw-btn'>
          Defend
        </button>
      </div>

      <div id='agent-div-2'>
        <div id='agent-container'>
          <AgentImage agentInfo={agentInfo} onClick={onClickAbility} />
        </div>

        <div className='ability-container'>
          <Abilities
            agentInfo={agentInfo}
            src={agentInfo.name}
            start={ability}
          />
        </div>

        <ul className='ability-container'>
          <li>
            <Draggable>
              <img
                src='/images/Misc-Images/Spike.png'
                className='ability-image'
                alt='Spike'
              />
            </Draggable>
          </li>
          <li>
            <Draggable>
              <img
                src='/images/Misc-Images/Ultimate-orb.png'
                className='ability-image'
                alt='Ultimate Orb'
              />
            </Draggable>
          </li>
        </ul>
        <button className='btn draw-btn border-btn'>Remove Border</button>
      </div>

      {/* <div id='agent-div'>
        <ul className='agent-container'>
          <li>
            <img
              src='/images/Agent-Images/Astra/Astra.png'
              className='agent-image'
              alt='Astra'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Breach/Breach.png'
              className='agent-image'
              alt='Breach'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Brimstone/Brimstone.png'
              className='agent-image'
              alt='Brimstone'
            />
          </li>
        </ul>
        <ul className='agent-container'>
          <li>
            <img
              src='/images/Agent-Images/Cypher/Cypher.png'
              className='agent-image'
              alt='Cypher'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Jett/Jett.png'
              className='agent-image'
              alt='Jett'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Killjoy/Killjoy.png'
              className='agent-image'
              alt='Killjoy'
            />
          </li>
        </ul>
        <ul className='agent-container'>
          <li>
            <img
              src='/images/Agent-Images/Omen/Omen.png'
              className='agent-image'
              alt='Omen'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Phoenix/Phoenix.png'
              className='agent-image'
              alt='Phoenix'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Raze/Raze.png'
              className='agent-image'
              alt='Raze'
            />
          </li>
        </ul>
        <ul className='agent-container'>
          <li>
            <img
              src='/images/Agent-Images/Reyna/Reyna.png'
              className='agent-image'
              alt='Reyna'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Sage/Sage.png'
              className='agent-image'
              alt='Sage'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Skye/Skye.png'
              className='agent-image'
              alt='Skye'
            />
          </li>
        </ul>
        <ul className='agent-container'>
          <li>
            <img
              src='/images/Agent-Images/Sova/Sova.png'
              className='agent-image'
              alt='Sova'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Viper/Viper.png'
              className='agent-image'
              alt='Viper'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Yoru/Yoru.png'
              className='agent-image'
              alt='Yoru'
            />
          </li>
        </ul>

        <ul id='ability-container'>
          <li>
            <img
              src='/images/Agent-Images/Astra/Abil-0.png'
              className='ability-image'
              alt='ability 1'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Astra/Abil-1.png'
              className='ability-image'
              alt='ability 2'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Astra/Abil-2.png'
              className='ability-image'
              alt='ability 3'
            />
          </li>
          <li>
            <img
              src='/images/Agent-Images/Astra/Abil-3.png'
              className='ability-image'
              alt='ability 4'
            />
          </li>
        </ul>

        <ul id='ability-container'>
          <li>
            <img
              src='/images/Misc-Images/Spike.png'
              className='ability-image'
              alt='Spike'
            />
          </li>
          <li>
            <img
              src='/images/Misc-Images/Ultimate-orb.png'
              className='ability-image'
              alt='Ultimate Orb'
            />
          </li>
        </ul>
        <button className='btn draw-btn border-btn'>Remove Border</button>
      </div> */}
    </div>
  );
};

export default Agents;
