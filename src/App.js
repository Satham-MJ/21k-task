import "./App.css";
import VideoSection from "./Components/VideoSection";

function App() {
  const videos = [
    "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    "https://images.unsplash.com/photo-1494253109108-2e30c049369b",
    "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg",
    "https://www.kickassfacts.com/wp-content/uploads/2021/04/bear.jpg",
  ];
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((item, index) => {
          return <VideoSection img={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
