const Abilities = ({ agentInfo }) => {
  return (
    <>
      {agentInfo.map((agent) => (
        <div>
          <img
            key='ability0'
            src={agent.abil_0}
            className='ability-image'
            alt='ability 0'
          ></img>

          <img
            key='ability1'
            src={agent.abil_1}
            className='ability-image'
            alt='ability 1'
          ></img>

          <img
            key='ability2'
            src={agent.abil_2}
            className='ability-image'
            alt='ability 2'
          ></img>

          <img
            key='ability3'
            src={agent.abil_3}
            className='ability-image'
            alt='ability 3'
          ></img>
        </div>
      ))}
    </>
  );
};

export default Abilities;
