// useState
//-----------------------------------------------------------------

// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [isRed, setRed] = useState(false);
//   const handleIncrement = () => {
//     setCount(count + 1);
//     setRed(!isRed);
//   };
//   return (
//     <div className="app">
//       <button className="btn" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button
//         className="btn"
//         onClick={() => {
//           setCount(count - 1);
//           setRed(!isRed);
//         }}
//       >
//         Decrement
//       </button>
//       <h1>{count}</h1>
//       <h1 className={isRed ? "red" : ""}>Change My Color!</h1>
//     </div>
//   );
// };

// export default App;

// ------------------------------------------------------------------

// useState with object
// ---------------------

// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState({
//     firstname: "",
//     lastname: "",
//   });
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="fname"
//         value={name.firstname}
//         onChange={(e) => {
//           setName({ ...name, firstname: e.target.value });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="lname"
//         value={name.lastname}
//         onChange={(e) => {
//           setName({ ...name, lastname: e.target.value });
//         }}
//       />
//       <h1>your first name is {name.firstname}</h1>
//       <h1>your last name is {name.lastname}</h1>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------------------------

// useState with array
// -------------------

// import React, { useState } from "react";

// const App = () => {
//   const [items, setItems] = useState([]);
//   const addItem = () => {
//     setItems([
//       ...items,
//       {
//         id: items.length,
//         value: Math.floor(Math.random() * 10) + 1,
//       },
//     ]);
//   };
//   return (
//     <div>
//       <button onClick={addItem}>Add a number</button>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// -------------------------------
// useEffect- ex1
// ----------

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const loadMousePosition = (e) => {
//     setX(e.clientX);
//     setY(e.clientY);
//   };
//   useEffect(() => {
//     window.addEventListener("mousemove", loadMousePosition);
//   }, []);
//   return (
//     <div>
//       <h1>X - {x}</h1>
//       <h1>Y- {y}</h1>
//     </div>
//   );
// };

// export default App;

// ---------------------------------------------------------------
// useEffect - ex2
//------------------

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const tick = () => {
//     setCount(count + 1);
//   };
//   useEffect(() => {
//     const interval = setInterval(tick, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [count]);
//   return <div>{count}</div>;
// };

// export default App;

// ----------------------------------------------------------------------

// Data Fetching from API Using useEffect - fetch all posts
// --------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         setPosts(res.data);
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// ----------------------------------------------------------------------

// Data Fetching from API Using useEffect - fetch post by id
// --------------------------------------

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [post, setPost] = useState({});
//   const [id, setId] = useState("");
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/" + id)
//       .then((res) => {
//         setPost(res.data);
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);
//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <h1>{post.title}</h1>
//     </div>
//   );
// };

// export default App;

// ----------------------------------------------------
// Context API and useContext
//  --------------------------------------

// import React, { createContext } from "react";
// import ComponentA from "./components/ComponentA";

// export const UserContext = createContext();
// export const ChannelContext = createContext();

// const App = () => {
//   return (
//     <div>
//       <UserContext.Provider value={"kareem"}>
//         <ChannelContext.Provider value={"Simple Arab Code"}>
//           <ComponentA />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------------------------

// useReducer
// --------------------------------------------

// import React, { useReducer } from "react";
// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Count - {count}</h1>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------
// multiple use reducer

// import React, { useReducer } from "react";
// import reducer from "./reducer";
// import { initialState } from "./reducer";

// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Count One - {count}</h1>

//       {/* Count One */}
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>

//       <h1>Count Two - {countTwo}</h1>
//       {/* Count Two */}
//       <button onClick={() => dispatchTwo("increment")}>Increment</button>
//       <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
//       <button onClick={() => dispatchTwo("reset")}>Reset</button>
//     </div>
//   );
// };

// export default App;

// --------------------------------------------------------------
// usereducer (complex state and action)
// ---------------------------------------

// import React, { useReducer } from "react";
// const initialState = {
//   firstCount: 0,
//   secondCount: 2,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     // count one
//     case "increment":
//       return { ...state, firstCount: state.firstCount + action.value };
//     case "decrement":
//       return { ...state, firstCount: state.firstCount - action.value };
//     case "increment5":
//       return { ...state, firstCount: state.firstCount + action.value };
//     case "decrement5":
//       return { ...state, firstCount: state.firstCount - action.value };

//     // count two
//     case "incrementCountTwo":
//       return { ...state, secondCount: state.secondCount + action.value };
//     case "decrementCountTwo":
//       return { ...state, secondCount: state.secondCount - action.value };

//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// const App = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       {/*Count one */}
//       <h1>Count - {count.firstCount}</h1>
//       <button onClick={() => dispatch({ type: "increment", value: 1 })}>
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
//         Increment5
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
//         Decrement
//       </button>
//       <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
//         Decrement5
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

//       {/*Count two */}
//       <h1>Count - {count.secondCount}</h1>
//       <button onClick={() => dispatch({ type: "incrementCountTwo", value: 1 })}>
//         Increment Count Two
//       </button>
//       <button onClick={() => dispatch({ type: "decrementCountTwo", value: 1 })}>
//         Decrement Count Two
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

// export default App;

// ----------------------------------------------------------------
// usereducer & useContext
// ------------------------------------------------------------------

import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import { initialState } from "./reducer";
import ComponentD from "./ComponentD";
import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";

export const CountContext = createContext();

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {count}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentD />
        <ComponentE />
        <ComponentF />
      </CountContext.Provider>
    </div>
  );
};

export default App;
