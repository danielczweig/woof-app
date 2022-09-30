import zipCodeData from 'zipcode-city-distance'

const calculateDistance = (zip1, zip2) => {
  let zipCodeDistance = zipCodeData.zipCodeDistance(zip1, zip2,'M');
  return zipCodeDistance
}

export default calculateDistance