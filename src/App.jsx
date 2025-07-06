// import React, { useState } from 'react';
// import './App.css';
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';


// function App() {
//   const [AllChat, setAllChat] = useState([]); // ✅ Use useState
//   const [input, setInput] = useState('');

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     const requestBody = {
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: input }],
//       max_tokens: 100
//     };

//     try {
//       const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer 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",
//           "HTTP-Referer": "https://yourdomain.com",
//           "X-Title": "MyGPT"
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const data = await res.json();
//       const obj = {
//         question: input,
//         answer: data.choices[0]?.message?.content || "No response"
//       };

//       // ✅ Update chat list
//       setAllChat(prev => [...prev, obj]);
//       setInput('');
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className='main'>
//     <div className="app-container">
//       <h1>AI Assistant</h1>

//       <div className="chat-history">
//         {AllChat.map((chat, index) => (
//           <div key={index} className="chat-bubble">
//             <p className='question'> {chat.question}</p>
//             <p className='answer' > {chat.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
// <div className='input_box'>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask me anything..."
//         />
//       <button onClick={handleSubmit}><ArrowUpwardRoundedIcon

//       /></button>
//         </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import './App.css';
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // ✅ Copy icon

// function App() {
//   const [AllChat, setAllChat] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     const requestBody = {
//       // model: "gpt-3.5-turbo",
//       model: "openrouter/cypher-alpha:free",
//       // model: "openai/gpt-3.5-turbo",
//       messages: [{ role: "user", content: input }],
//       max_tokens: 100
//     };

//     // Authorization: "Bearer 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",
//     try {
//       const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer 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",
//           "HTTP-Referer": "https://yourdomain.com",
//           "X-Title": "MyGPT"
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const data = await res.json();
//       const obj = {
//         question: input,
//         answer: data.choices[0]?.message?.content || "No response"
//       };

//       setAllChat(prev => [...prev, obj]);
//       setInput('');
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => alert("Copied to clipboard!"))
//       .catch(() => alert("Failed to copy!"));
//   };

//   return (
//     <div className='main'>
//       <div className="app-container">
//         <h1>AI Assistant</h1>

//         <div className="chat-history">
//           {AllChat.map((chat, index) => (
//             <div key={index} className="chat-bubble">
//               <p className='question'>{chat.question}</p>
//               <div className="answer-with-copy">
//                 <p className='answer'>{chat.answer}</p>
//                 <ContentCopyIcon
//                   className="copy-icon"
//                   onClick={() => handleCopy(chat.answer)}
//                   style={{ cursor: 'pointer', marginLeft: '8px' }}
//                   titleAccess="Copy Answer"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='input_box'>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//         />
//         <button onClick={handleSubmit}>
//           <ArrowUpwardRoundedIcon />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;



// // import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';

// // export const StarsBackgroundDemo = () => {
// //   return (
// //     <StarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
// //   );
// // };




// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// function App() {
//   const [AllChat, setAllChat] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false); // ✅ New loading state

//   const bottomRef = useRef(null); // ✅ Scroll ref

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     setLoading(true); // ✅ Disable button
//     const requestBody = {
//       model: "openrouter/cypher-alpha:free",
//       messages: [{ role: "user", content: input }],
//       max_tokens: 100
//     };

//     try {
//       const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer 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",
//           "HTTP-Referer": "https://yourdomain.com",
//           "X-Title": "MyGPT"
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const data = await res.json();
//       const obj = {
//         question: input,
//         answer: data.choices[0]?.message?.content || "No response"
//       };

//       setAllChat(prev => [...prev, obj]);
//       setInput('');
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false); // ✅ Enable button
//     }
//   };

//   // ✅ Scroll to bottom whenever AllChat updates
//   useEffect(() => {
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [AllChat]);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => alert("Copied to clipboard!"))
//       .catch(() => alert("Failed to copy!"));
//   };

//   return (
//     <div className='main'>
//       <div className="app-container">
//         <h1>AI Assistant</h1>

//         <div className="chat-history">
//           {AllChat.map((chat, index) => (
//             <div key={index} className="chat-bubble">
//               <p className='question'>{chat.question}</p>
//               <div className="answer-with-copy">
//                 <p className='answer'>{chat.answer}</p>
//                 <ContentCopyIcon
//                   className="copy-icon"
//                   onClick={() => handleCopy(chat.answer)}
//                   style={{ cursor: 'pointer', marginLeft: '8px' }}
//                   titleAccess="Copy Answer"
//                 />
//               </div>
//             </div>
//           ))}
//           <div ref={bottomRef} /> {/* ✅ Scroll target */}
//         </div>
//       </div>

//       <div className='input_box'>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything..."
//           disabled={loading} // ✅ Disable input optionally
//         />
//         <button onClick={handleSubmit} disabled={loading}> {/* ✅ Disable button */}
//           <ArrowUpwardRoundedIcon />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;













// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// function App() {
//   const [AllChat, setAllChat] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef(null); // Scroll target

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     setLoading(true);
//     const requestBody = {
//       model: "openrouter/cypher-alpha:free",
//       messages: [{ role: "user", content: input }],
//       max_tokens: 100
//     };

//     try {
//       const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer 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",
//           "HTTP-Referer": "https://yourdomain.com",
//           "X-Title": "MyGPT"
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const data = await res.json();
//       const obj = {
//         question: input,
//         answer: data.choices[0]?.message?.content || "No response"
//       };

//       setAllChat(prev => [...prev, obj]);
//       setInput('');
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Scroll to bottom after new message
//   useEffect(() => {
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [AllChat]);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => alert("Copied to clipboard!"))
//       .catch(() => alert("Failed to copy!"));
//   };

//   return (
//     <div className='main'>
//       <div className="app-container">
//         <h1>AI Assistant</h1>

//         <div className="chat-history">
//           {AllChat.map((chat, index) => (
//             <div key={index} className="chat-bubble">
//               <p className='question'>{chat.question}</p>
//               <div className="answer-with-copy">
//                 <p className='answer'>{chat.answer}</p>
//                 <ContentCopyIcon
//                   className="copy-icon"
//                   onClick={() => handleCopy(chat.answer)}
//                   style={{ cursor: 'pointer', marginLeft: '8px' }}
//                   titleAccess="Copy Answer"
//                 />
//               </div>
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>
//       </div>

//       <div className='input_box'>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') handleSubmit(); // Trigger on Enter
//           }}
//           placeholder="Ask me anything..."
//           disabled={loading}
//         />
//         <button onClick={handleSubmit} disabled={loading}>
//           <ArrowUpwardRoundedIcon />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;









// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// function App() {
//   const [AllChat, setAllChat] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef(null); // For auto scroll

//   const handleSubmit = async () => {
//     if (!input.trim()) return;

//     setLoading(true);
//     const requestBody = {
//       model: "openrouter/cypher-alpha:free",
//       messages: [{ role: "user", content: input }],
//       max_tokens: 100
//     };

//     try {
//       const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer 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",
//           "HTTP-Referer": "https://yourdomain.com",
//           "X-Title": "MyGPT"
//         },
//         body: JSON.stringify(requestBody)
//       });

//       const data = await res.json();
//       const obj = {
//         question: input,
//         answer: data.choices[0]?.message?.content || "No response"
//       };

//       setAllChat(prev => [...prev, obj]);
//       setInput('');
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Auto scroll to bottom when new message added
//   useEffect(() => {
//     if (bottomRef.current) {
//       bottomRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [AllChat]);

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text)
//       .then(() => alert("Copied to clipboard!"))
//       .catch(() => alert("Failed to copy!"));
//   };

//   return (
//     <div className='main'>
//       <div className="app-container">
//         <h1>AI Assistant</h1>

//         <div className="chat-history">
//           {AllChat.map((chat, index) => (
//             <>
//             {/* User question (right) */}
// <div key={index + '-q'} className="chat-bubble question-bubble">
//   <div className="bubble-content question">{chat.question}</div>
// </div>

// {/* AI answer (left) */}
// <div key={index + '-a'} className="chat-bubble answer-bubble">
//   <div className="bubble-content answer-with-copy answer">
//     <span style={{ flex: 1 }}>{chat.answer}</span>
//     <ContentCopyIcon
//       className="copy-icon"
//       onClick={() => handleCopy(chat.answer)}
//       style={{ cursor: 'pointer', marginLeft: '8px' }}
//       titleAccess="Copy Answer"
//     />
//   </div>
// </div>
// </>
//           ))}
//           <div ref={bottomRef} />
//         </div>
//       </div>

//       <div className='input_box'>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') handleSubmit();
//           }}
//           placeholder="Ask me anything..."
//           disabled={loading}
//         />
//         <button onClick={handleSubmit} disabled={loading}>
//           {loading ? (
//             <div className="loader" />
//           ) : (
//             <ArrowUpwardRoundedIcon />
//           )}
//         </button>
//       </div>
//     </div >
//   );
// }

// export default App;



"use client"
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function App() {
  const [AllChat, setAllChat] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const handleSubmit = async () => {
    console.log("data"  , import.meta.env.VITE_SECRET_KEY)
    if (!input.trim()) return;

    setLoading(true);
    // model: "openrouter/cypher-alpha:free",
    const requestBody = {
      model: "mistralai/mistral-small-3.2-24b-instruct:free",
      messages: [{ role: "user", content: input }],
      max_tokens: 100
    };

    // Authorization: `Bearer ${process.env.SECRET_KEY}`,
    // "HTTP-Referer": "https://yourdomain.com",
    // "X-Title": "MyGPT"
    // Authorization: `Bearer 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`,
    // Authorization: `Bearer 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`,
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SECRET_KEYS}`,
        },
        body: JSON.stringify(requestBody)
      });

      const data = await res.json();
      const obj = {
        question: input,
        answer: data.choices[0]?.message?.content || "No response"
      };

      setAllChat(prev => [...prev, obj]);
      setInput('');
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [AllChat]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch(() => alert("Failed to copy!"));
  };

  return (<>
    <div className='main'>
      <div className="app-container">
        <h1>GHOST AI</h1>


        <div className="chat-history">
          {AllChat.map((chat, index) => (
            <React.Fragment key={index}>
              {/* User question - right aligned */}
              <div className="chat-bubble question-bubble">
                <div className="bubble-content question">{chat.question}</div>
              </div>

              {/* AI answer - left aligned */}
              <div className="chat-bubble answer-bubble">
                <div className="bubble-content answer-with-copy answer">
                  <span style={{ flex: 1 }}>{chat.answer}</span>
                  <ContentCopyIcon
                    className="copy-icon"
                    onClick={() => handleCopy(chat.answer)}
                    style={{ cursor: 'pointer', marginTop: "10px", marginLeft: '4px', fontSize: "15px" }}
                    titleAccess="Copy Answer"
                  />
                </div>
              </div>
            </React.Fragment>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <div className='input_box'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSubmit();
          }}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <div className="loader" />
          ) : (
            <ArrowUpwardRoundedIcon />
          )}
        </button>
      </div>

    </div>
    <p>© 2025 <a href="https://abdullah-bin-aslam.vercel.app/" target='_blank' style={{color:"white"}}>
      Abdullah Bin Aslam
    </a>
      . All rights reserved.</p>
  </>
  );
}

export default App;

