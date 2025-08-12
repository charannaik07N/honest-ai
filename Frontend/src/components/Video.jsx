import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

export default function Video() {
  const {
    status: screenStatus,
    startRecording: startScreenRecording,
    stopRecording: stopScreenRecording,
    mediaBlobUrl: screenBlobUrl,
  } = useReactMediaRecorder({
    screen: true,
    audio: true,
    video: true,
  });

  const {
    status: camStatus,
    startRecording: startCamRecording,
    stopRecording: stopCamRecording,
    mediaBlobUrl: camBlobUrl,
  } = useReactMediaRecorder({
    video: true,
    audio: true,
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Screen Recording</h2>
      <p>Status: {screenStatus}</p>
      <button onClick={startScreenRecording}>Start Screen Recording</button>
      <button onClick={stopScreenRecording}>Stop Screen Recording</button>
      {screenBlobUrl && (
        <video
          src={screenBlobUrl}
          controls
          autoPlay
          loop
          style={{ width: "500px" }}
        />
      )}

      <hr />

      <h2>Webcam Recording</h2>
      <p>Status: {camStatus}</p>
      <button onClick={startCamRecording}>Start Webcam Recording</button>
      <button onClick={stopCamRecording}>Stop Webcam Recording</button>
      {camBlobUrl && (
        <video
          src={camBlobUrl}
          controls
          autoPlay
          loop
          style={{ width: "500px" }}
        />
      )}
    </div>
  );
}
