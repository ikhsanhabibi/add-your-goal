import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoalsList, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { key: Math.random().toString(), value: goalTitle }
        ]);
    };

    return (
        <ScrollView style={styles.screen}>
            <Text style={styles.title}>Course Goal</Text>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.key}
                data={courseGoalsList}
                renderItem={itemData => (
                    <GoalItem title={itemData.item.value} />
                )}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: { paddingTop: 50, padding: 50 },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: 30
    }
});
