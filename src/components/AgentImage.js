import Agent from './Agent';

const AgentImage = ({ agentInfo, onClick }) => {
  return (
    <>
      {agentInfo.map((agent) => (
        <Agent
          key={agent.name}
          agent={agent}
          onClick={onClick}
          number={agent.number}
        />
      ))}
    </>
  );
};

export default AgentImage;
