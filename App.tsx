import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NumberBtn from "./src/number";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/Root";
import Home from "./src/Home";
import Detail from "./src/Detail";

export default function App() {
	
	
	return (
		<NavigationContainer>
			<Root/>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	
});