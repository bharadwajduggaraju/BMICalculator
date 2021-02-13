export default function CalulateBMIImperial(heightininches, weightinpounds) {
  const heightsquared = heightininches * heightininches;
  const decimalbmi = weightinpounds / heightsquared;
  const BMI = decimalbmi * 703;
  return BMI;
}
