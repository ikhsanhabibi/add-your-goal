import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = props => {
    return (
        <View>
            <Text style={styles.courseGoalList}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    courseGoalList: {
        fontSize: 15,
        backgroundColor: "#ccc",
        borderWidth: 1,
        marginVertical: 10,
        padding: 10
    }
});

export default GoalItem;
