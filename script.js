(async () => {
  // Load model
  await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
  await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
  await faceapi.nets.faceLandmark68Net.loadFromUri("/models");

  // Detect Face
  const input = document.getElementById("myImage");
  const result = await faceapi
    .detectSingleFace(input, new faceapi.SsdMobilenetv1Options())
    .withFaceLandmarks()
    .withFaceDescriptor();
  const displaySize = { width: input.width, height: input.height };
  // resize the overlay canvas to the input dimensions
  const canvas = document.getElementById("mycanvas");
  faceapi.matchDimensions(canvas, displaySize);
  const resizedDetections = faceapi.resizeResults(result, displaySize);
  console.log(resizedDetections);

  // Recognize Face
  const labeledFaceDescriptors = await detectAllLabeledFaces();
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.7);
  if (result) {
    const bestMatch = faceMatcher.findBestMatch(result.descriptor);
    const box = resizedDetections.detection.box;
    const drawBox = new faceapi.draw.DrawBox(box, { label: bestMatch.label });
    drawBox.draw(canvas);
  }
})();

async function detectAllLabeledFaces() {
  const labels = ["phuong"];
  return Promise.all(
    labels.map(async label => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(
          `https://gemary.github.io/data/${label}/face${i}.jpg`
        );
        const detection = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        descriptions.push(detection.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}

async function detectNancyFace() {
  const label = "phuong";
  const numberImage = 3;
  const descriptions = [];
  for (let i = 1; i <= numberImage; i++) {
    const img = await faceapi.fetchImage(
      `https://gemary.github.io/data/phuong/face${i}.jpg`
    );
    const detection = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();
    descriptions.push(detection.descriptor);
  }
  return new faceapi.LabeledFaceDescriptors(label, descriptions);
}
