// import React, { useState, useRef, useEffect } from 'react';
// import './VideoTrimmer.css';

// const MAX_SIZE_MB = 200;

// const VideoTrimmer = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoUrl, setVideoUrl] = useState('');
//   const [duration, setDuration] = useState(0);
//   const [startTime, setStartTime] = useState(0);
//   const [endTime, setEndTime] = useState(0);
//   const videoRef = useRef();

//   useEffect(() => {
//     if (videoFile) {
//       const url = URL.createObjectURL(videoFile);
//       setVideoUrl(url);
//     }
//   }, [videoFile]);

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//     }
//   };

//   const handleLoadedMetadata = () => {
//     const videoDuration = videoRef.current.duration;
//     setDuration(videoDuration);

//     const fileSizeMB = videoFile.size / (1024 * 1024);

//     if (fileSizeMB > MAX_SIZE_MB) {
//       const sizePerSecond = fileSizeMB / videoDuration;
//       const allowedDuration = Math.floor(MAX_SIZE_MB / sizePerSecond);
//       setStartTime(0);
//       setEndTime(allowedDuration);
//     } else {
//       setStartTime(0);
//       setEndTime(videoDuration);
//     }
//   };

//   const handleStartChange = (e) => {
//     const value = Number(e.target.value);
//     if (value < endTime) setStartTime(value);
//   };

//   const handleEndChange = (e) => {
//     let value = Number(e.target.value);
//     const sizePerSecond = (videoFile.size / (1024 * 1024)) / duration;
//     const maxTrimDuration = Math.floor(MAX_SIZE_MB / sizePerSecond);

//     if (value - startTime > maxTrimDuration) {
//       setStartTime(value - maxTrimDuration);
//     }
//     if (value <= duration) {
//       setEndTime(value);
//     }
//   };

//   const formatTime = (seconds) => {
//     const min = String(Math.floor(seconds / 60)).padStart(2, '0');
//     const sec = String(Math.floor(seconds % 60)).padStart(2, '0');
//     return `00:${min}:${sec}`;
//   };

//   return (
//     <div className="video-trimmer">
//       <h2>Video Trimmer (Max 200MB)</h2>
//       <input type="file" accept="video/*" onChange={handleVideoUpload} />

//       {videoUrl && (
//         <>
//           <video
//             ref={videoRef}
//             src={videoUrl}
//             controls
//             onLoadedMetadata={handleLoadedMetadata}
//             className="video-preview"
//           />

//           <div className="slider-container">
//             <div>
//               <label>Start Trim: {formatTime(startTime)}</label>
//               <input
//                 type="range"
//                 min="0"
//                 max={Math.floor(duration)}
//                 value={startTime}
//                 onChange={handleStartChange}
//               />
//             </div>
//             <div>
//               <label>End Trim: {formatTime(endTime)}</label>
//               <input
//                 type="range"
//                 min="0"
//                 max={Math.floor(duration)}
//                 value={endTime}
//                 onChange={handleEndChange}
//               />
//             </div>
//           </div>

//           <p>Trimmed Duration: {formatTime(endTime - startTime)}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default VideoTrimmer;







// import React, { useState, useRef, useEffect } from 'react';
// import './VideoTrimmer.css';

// const MAX_SIZE_MB = 200;

// const VideoTrimmer = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoUrl, setVideoUrl] = useState('');
//   const [duration, setDuration] = useState(0);
//   const [startTime, setStartTime] = useState(0);
//   const [endTime, setEndTime] = useState(0);
//   const videoRef = useRef();

//   useEffect(() => {
//     if (videoFile) {
//       const url = URL.createObjectURL(videoFile);
//       setVideoUrl(url);
//     }
//   }, [videoFile]);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = startTime;
//     }
//   }, [startTime]);

//   const handleVideoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setVideoFile(file);
//     }
//   };

//   const handleLoadedMetadata = () => {
//     const videoDuration = videoRef.current.duration;
//     setDuration(videoDuration);

//     const fileSizeMB = videoFile.size / (1024 * 1024);

//     if (fileSizeMB > MAX_SIZE_MB) {
//       const sizePerSecond = fileSizeMB / videoDuration;
//       const allowedDuration = Math.floor(MAX_SIZE_MB / sizePerSecond);
//       setStartTime(0);
//       setEndTime(allowedDuration);
//     } else {
//       setStartTime(0);
//       setEndTime(videoDuration);
//     }
//   };

//   const handleStartChange = (e) => {
//     const value = Number(e.target.value);
//     if (value < endTime) setStartTime(value);
//   };

//   const handleEndChange = (e) => {
//     let value = Number(e.target.value);
//     const sizePerSecond = (videoFile.size / (1024 * 1024)) / duration;
//     const maxTrimDuration = Math.floor(MAX_SIZE_MB / sizePerSecond);

//     if (value - startTime > maxTrimDuration) {
//       setStartTime(value - maxTrimDuration);
//     }
//     if (value <= duration) {
//       setEndTime(value);
//     }
//   };

//   const formatTime = (seconds) => {
//     const min = String(Math.floor(seconds / 60)).padStart(2, '0');
//     const sec = String(Math.floor(seconds % 60)).padStart(2, '0');
//     return `00:${min}:${sec}`;
//   };

//   return (
//     <div className="video-trimmer">
//       <h2>Video Trimmer (Max 200MB)</h2>
//       <input type="file" accept="video/*" onChange={handleVideoUpload} />

//       {videoUrl && (
//         <>
//           <video
//             ref={videoRef}
//             src={videoUrl}
//             controls
//             onLoadedMetadata={handleLoadedMetadata}
//             className="video-preview"
//           />

//           <div className="slider-container">
//             <div>
//               <label>Start Trim: {formatTime(startTime)}</label>
//               <input
//                 type="range"
//                 min="0"
//                 max={Math.floor(duration)}
//                 value={startTime}
//                 onChange={handleStartChange}
//               />
//             </div>
//             <div>
//               <label>End Trim: {formatTime(endTime)}</label>
//               <input
//                 type="range"
//                 min="0"
//                 max={Math.floor(duration)}
//                 value={endTime}
//                 onChange={handleEndChange}
//               />
//             </div>
//           </div>

//           <p>Trimmed Duration: {formatTime(endTime - startTime)}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default VideoTrimmer;

