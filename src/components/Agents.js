const Agents = () => {
  const attackDefend = () => {
    console.log('reee');
    const agentImages = document.getElementsByClassName('agent-image');
    for (let i = 0; i < agentImages.length; i++) {
      //   agentImages.style.border = '5px solid red';
    }
  };

  return (
    <div id='agent-skill-container'>
      <div>
        <button id='attack-btn' className='btn map-btn' onClick={attackDefend}>
          Attack
        </button>
        <button id='defend-btn' className='btn map-btn'>
          Defend
        </button>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default Agents;
