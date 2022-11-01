<!-- React Router quick setup steps -->

index .js

### step 1 import react-router-dom inside index.js and use browse router

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

### Step 2 - Create multiple components/pages

We'll create the following Home, About, and Contact components like this:

```js
// Home component
function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;

// About component
import React from 'react'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
        </div>
    )
}

export default About

// Contact component
import React from 'react'

function Contact() {
    return (
        <div>
            <h1>This is the contact page</h1>
        </div>
    )
}

export default Contact

```

### step 3 Define routes

Since the App component acts as the root component where our React code gets rendered from initially, we will be creating all our routes in it.

App.js

```js
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
```

### Step 4 Use Link to navigate to routes

Home.jsx

```js
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Home;
```
