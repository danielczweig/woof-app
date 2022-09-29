const calculateSize = (weight) => {
  if(weight <= 10) {
    return 'small'
  }
  if(weight <= 20) {
    return 'medium'
  }
  return 'big'
}

export default calculateSize