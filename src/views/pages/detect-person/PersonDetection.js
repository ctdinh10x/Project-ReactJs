import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { drawRect } from "./utilities";
import "./css/App.css"

const FaceDetection = () => {
  // const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check if data is available
    console.log("thuc thi");
    if (videoRef.current && videoRef.current.readyState === 4) {
      // Get Video Properties
      
      const video = videoRef.current;
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;
      // Set video width
      video.width = videoWidth;
      video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);
      console.log(obj);
      // Draw rectangles
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      videoRef.current.src = videoUrl;
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ marginBottom: 10 }}
        />
      <header className="App-header">
        

        <video
        autoPlay
          ref={(ref) => {
            // webcamRef.current = ref;
            videoRef.current = ref;
          }}
          muted={true}
          controls
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 8,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 350,
          }}
        />
      </header>
    </div>
  );
}

export default FaceDetection;
