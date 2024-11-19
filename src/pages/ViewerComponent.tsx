import { useEffect, useRef, useState } from 'react';
//import './App.css';
import { Engine } from '@babylonjs/core';
import { Viewer } from '@babylonjs/viewer';

function ViewerComponent({handleOpen }) {


  const canvasRef = useRef(null);
  const viewerRef = useRef<Viewer | null>(null);
  if (viewerRef.current) {
    viewerRef.current.cameraAutoOrbit = {enabled:false};
  }



  const onDrop = (e) => {
    console.log("onDrop");
    const file = e.dataTransfer.files[0];
    if (file) {
      e.preventDefault();
      if (viewerRef.current) {
        viewerRef.current!.loadModel(file);
        console.log(file)
     
        viewerRef.current.onModelChanged.add(() => {
            console.log('Model changed');
            handleOpen(file)
          });
      }
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const viewer = new Viewer(engine, {
      onInitialized: (details) => {
        console.log('DETAILS', details);
        viewerRef.current = details.viewer;
        details.viewer.cameraAutoOrbit = {enabled:false};
      },
    });

    viewer.onEnvironmentChanged.add(() => console.log('ENV CHANGE'));
    viewer.onModelError.add(() => {
      console.log('ModelError');
    });

   // viewer.loadModel(props.source);


    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <div
    onDragOver={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
    onDrop={onDrop}
  >
    <canvas
      title="BoomBox"
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
    />
    </div>
  );
}

export default ViewerComponent;


