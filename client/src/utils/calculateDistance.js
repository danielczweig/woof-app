import zipCodeData from 'zipcode-city-distance'

const calculateDistance = (zip1, zip2) => {
  let zipCodeDistance = zipCodeData.zipCodeDistance(zip1, zip2,'M');
  console.log('this is distance:', zipCodeDistance)
  return zipCodeDistance
}

export default calculateDistance