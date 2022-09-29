const calculateAge = (birthday) => {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970) > 0 ? Math.abs(ageDate.getUTCFullYear() - 1970) : 'puppy';
}

export default calculateAge