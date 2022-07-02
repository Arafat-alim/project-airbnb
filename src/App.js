import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import katie from "./images/katie-zaferes.png";

import jokerAPI from "./challenge/jokerAPI";
import Jokes from "./challenge/Jokes";

function App() {
  /* Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136) */

  // practice challenge
  const jokesElement = jokerAPI.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating={5.0}
        reviewCount={6}
        country={"India"}
        title={"Life Lessons with Katie Zaferes"}
        price={165}
      />
      {jokesElement}
    </div>
  );
}

export default App;
