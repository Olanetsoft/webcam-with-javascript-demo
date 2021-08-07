// Start Cam function
const startCam = () => {
  //Initialize video
  const video = document.getElementById("video");

  // validate video element
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch(function (error) {
        console.log("Something went wrong!");
      });
  }
};

// Stop the webcam function
const stopCam = () => {
  let stream = video.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach((track) => track.stop());
  video.srcObject = null;
};

$(() => {
  startCam();
});
