import logo from './logo.svg';
import './App.css';
import MessageContext from './context/MessageContext';
import { useContext } from 'react';

function App() {
  const message = "Hello World!";
  return (
    <div>
      <MessageContext.Provider value={message}>
        <ComponentA />
      </MessageContext.Provider>
    </div>
  );
}

function ComponentA(){
  return (<ComponentB />);
}

function ComponentB(){
  const message = useContext(MessageContext);
  return <div>Message: {message}</div>
}

export default App;
