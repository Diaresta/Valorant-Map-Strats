import Agent from './Agent';

const AgentImage = ({ agentInfo, onClick, style }) => {
  return (
    <>
      {agentInfo.map((agent) => (
        <Agent
          key={agent.name}
          agent={agent}
          onClick={onClick}
          number={agent.number}
          style={style}
        />
      ))}
    </>
  );
};

export default AgentImage;
