export default function FindBMIRange(gender, BMI) {
  if (gender === "Male") {
    if (BMI <= 18.49) {
      return "Underweight";
    } else if (BMI >= 18.50 && BMI <= 24.99) {
      return "Normal";
    } else if (BMI >= 25.00 && BMI <= 29.99) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (gender === "Female") {
    if (BMI <= 18.59) {
      return "Underweight";
    } else if (BMI >= 18.60 && BMI <= 24.90) {
      return "Normal";
    } else if (BMI >= 25.00 && BMI <= 29.99) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
}

