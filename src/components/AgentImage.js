import Agent from './Agent';

const AgentImage = ({ agentInfo }) => {
  return (
    <>
      {agentInfo.map((agent) => (
        <Agent key={agent.name} agent={agent} />
      ))}
    </>
  );
};

export default AgentImage;
