export default function CalculateBMIMetric(heightinmeters, weightinkilograms) {
  const heightsquared = heightinmeters * heightinmeters;
  const BMI = weightinkilograms / heightsquared;
  return BMI;
}


