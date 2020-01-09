import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    const inputGoal = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.view}>
            <TextInput
                placeholder="Write your goal please..."
                style={styles.textInput}
                onChangeText={inputGoal}
            ></TextInput>
            <Button
                title="Add goal"
                onPress={props.onAddGoal.bind(this, enteredGoal)}
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    textInput: {
        height: 50,
        width: 200,
        borderColor: "black",
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;
