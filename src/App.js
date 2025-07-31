// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{ useState} from "react";

function App(){
  const messages = [
    "Keep going, you're doing great!",
    "Believe In yourself, you are capable of amazing things!",
    "Dream Big GURL!!",
    "You are stronger than you think!",
    "Every day is a new beginning, take a deep breath and start again.",
    "You are enough just as you are.",
    "You have the power to create change.",
    "Your potential is limitless.",
    "You are worthy of love and respect.",
    "You are capable of achieving your goals.",
    "You are not alone, we are in this together.",
    "You are a work in progress, and that's okay.",
    "You are resilient and can overcome any challenge.",
    "You are unique and special in your own way.",  
    "You are deserving of happiness and success.",
    "You are capable of making a difference in the world.",
    "You are loved and appreciated for who you are.",
    "You are capable of learning and growing every day.",
    "You are a beautiful person inside and out.",
    "You are capable of achieving greatness.",
  ]

const [message, setMessages] = useState(messages);

const handleClick =()=>{
  const randomIndex = Math.floor(Math.random()*messages.length);
  setMessages(messages[randomIndex]);
  // alert();
};

 return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Mood Message App 💬</h1>
      <button onClick={handleClick} style={{
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        marginTop: '20px',
        backgroundColor: '#4ca2afff',
      }}>
        Get Mood Message
      </button>
      <p style={{ fontSize: '20px', marginTop: '30px', color: '#333' }}>
        {message}
      </p>
    </div>
  );
}
export default App;

