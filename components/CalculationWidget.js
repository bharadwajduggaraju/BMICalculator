import React from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

//Utils
import CalculateBMIMetric from "../utils/CalculateBMIMetric";
import CalculateBMIImperial from "../utils/CalculateBMIImperial";
import FindBMIRange from "../utils/FindBMIRange";

export default function CalculationWidget() {
  /* Demo of the BMI Calc System console.log(CalculateBMIImperial(24, 60)) 
    console.log(FindBMIRange("Female", CalculateBMIImperial(24, 60) ))*/

  const [measureSystem, setMeasureSystem] = React.useState("Standard");
  const [gender, setGender] = React.useState("Male");
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [toggles, setToggles] = React.useState(["Standard", "Metric"]);
  const [result, setResult] = React.useState([0, "Underweight"]);
  const [show, setShow] = React.useState(false);
  const [feet, setFeet] = React.useState("");
  const [RANGECOLOR, setRangeColor] = React.useState("green");

  var radio_props = [
    { label: "Male  ", value: 0 },
    { label: "Female  ", value: 1 },
  ];
  //Weird way to generate the NAN
  console.log(typeof parseFloat("hi") === "number");

  let RANGE = "";

  const handleSubmit = () => {
    console.log(typeof parseFloat(height))
    if (measureSystem === "Standard") {
      if (weight === "" || height === "" || feet === "") {
        Alert.alert(
          "Empty Field",
          "One or more of the required fields are empty",
          [
            {
              text: "Understood",
              style: "cancel",
            },
          ],
          { cancelable: true }
        );
      } else {
        const totalHeight = parseFloat(feet) * 12 + parseFloat(height);
        const BMI = CalculateBMIImperial(totalHeight, parseFloat(weight));
        RANGE = FindBMIRange(gender, Math.round(100 * BMI) / 100);
        setShow(true);
        setResult([Math.round(100 * BMI) / 100, RANGE]);
        setRangeColor(determineRangeColor(RANGE));
      }
    } else {
      if (weight === "" || height === "") {
        Alert.alert(
          "Empty Field",
          "One or more of the required fields are empty",
          [
            {
              text: "Understood",
              style: "cancel",
            },
          ],
          { cancelable: true }
        );
      } else {
        const BMI = CalculateBMIMetric(
          parseFloat(height) / 100,
          parseFloat(weight)
        );
        RANGE = FindBMIRange(gender, Math.round(100 * BMI) / 100);
        setShow(true);
        setResult([Math.round(100 * BMI) / 100, RANGE]);
        setRangeColor(determineRangeColor(RANGE));
      }
    }
  };

  const determineRangeColor = (rangeValue) => {
    switch (rangeValue) {
      case "Underweight":
        return "#9B870C";
      case "Normal":
        return "green";
      case "Overweight":
        return "orange";
      case "Obese":
        return "red";
      default:
        return "green";
    }
  };

  const heightValuePlaceHolder = measureSystem === "Standard" ? "in" : "cm";
  const weightValuePlaceHolder = measureSystem === "Standard" ? "lbs" : "kg";

  const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: "#fff",
      justifyContent: "center",
      zIndex: -100,
    },

    inner: {
      alignItems: "center",
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 10,
      padding: 15,
      shadowColor: "white",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
    },

    toggle: {
      flex: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      width: 200,
    },

    label: {
      marginTop: 10,
      fontSize: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: "gray",
      width: 150,
      marginTop: 5,
      textAlign: "left",
      paddingLeft: 6,
    },

    hinput: {
      borderWidth: 1,
      borderColor: "gray",
      textAlign: "left",
      width: measureSystem === "Standard" ? 75 : 150,
      marginTop: 5,
      paddingLeft: 6,
    },

    btn: {
      backgroundColor: "orange",
      color: "white",
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 5,
      paddingBottom: 5,
      marginTop: 5,
    },

    result: {
      marginTop: 10,
      flex: 0,
      alignItems: "center",
    },

    BMI: {
      textAlign: "center",
      fontSize: 30,
      color: RANGECOLOR,
    },

    RESULT: {
      textAlign: "center",
      fontSize: 20,
    },
  });

  const toggleStyles = (toggleState) => {
    const tStyles = StyleSheet.create({
      left: {
        color: "white",
        fontSize: 20,
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "orange",
      },
      right: {
        color: "black",
        fontSize: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
      },
    });

    switch (toggleState) {
      case "Standard":
        return tStyles.left;
      case "Metric":
        return tStyles.right;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.toggle}>
          <Text
            style={toggleStyles(toggles[0])}
            onPress={() => {
              setToggles(["Standard", "Metric"]);
              setMeasureSystem("Standard");
            }}
          >
            Standard
          </Text>
          <Text
            style={toggleStyles(toggles[1])}
            onPress={() => {
              setToggles(["Metric", "Standard"]);
              setMeasureSystem("Metric");
            }}
          >
            Metric
          </Text>
        </View>
        <Text style={styles.label}>Height</Text>
        <View style={{ flex: 0, flexDirection: "row" }}>
          {measureSystem === "Standard" && (
            <TextInput
              placeholder="ft"
              onChangeText={(textValue) => {
                setFeet(textValue);
              }}
              style={styles.hinput}
              value={feet}
            ></TextInput>
          )}
          <TextInput
            placeholder={heightValuePlaceHolder}
            onChangeText={(textValue) => {
              setHeight(textValue);
            }}
            style={styles.hinput}
            value={height}
          ></TextInput>
        </View>

        <Text style={styles.label}>Weight</Text>
        <TextInput
          placeholder={weightValuePlaceHolder}
          onChangeText={(textValue) => {
            setWeight(textValue);
          }}
          style={styles.input}
          value={weight}
        ></TextInput>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {
            const gender = value === 1 ? "Female" : "Male";
            setGender(gender);
          }}
          formHorizontal={true}
          buttonColor="orange"
          selectedButtonColor="orange"
          buttonSize={15}
          style={{ marginTop: 15, flex: 0, alignItems: "center" }}
        />

        <Text onPress={handleSubmit} style={styles.btn}>
          Calculate
        </Text>

        {show && (
          <View style={styles.result}>
            <Text style={styles.BMI}>{result[0]}</Text>
            <Text style={styles.RANGE}>{result[1]} BMI</Text>
          </View>
        )}
      </View>
    </View>
  );
}
