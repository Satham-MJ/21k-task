import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileVideo,
  faFileAudio,
  faFileText,
} from "@fortawesome/free-regular-svg-icons";

const VideoSection = ({ img }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      ></video>
      <div className="video__info">
        <h5>Video Title</h5>
      </div>
      <div className="video__acitons">
        <button>
          <FontAwesomeIcon icon={faFileVideo} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFileAudio} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFileText} />
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
