//Imports to help the code run.  Taken from surveyPage.component.jsx witten by Arti. 
//Imports that mention CanvasJS or react taken from example code from CanvasJS https://canvasjs.com/react-charts/bar-chart/
import React, { Component } from 'react';
import CanvasJSReact from '../constants/canvasjs.react.js';
import firebase from '../firebase/firebase.utils';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

//Calculate result of Survey 2 on Anxiety from survey item values stored in local storage.  Code taken and lightly modified from surveyPage.component.jsx written by Arti.  Sums the five-item survey results and divides by 5 to equalize data for display next to the other two surveys.
const computeAttitudeSurvey2 = () => {
	console.log('computing Survey2 attitude');
	let Survey2 = JSON.parse(localStorage.getItem('Survey2'));
	let Survey2_attitude = 0;
	let sum = 0;
	const experimentCondition = Math.floor(Math.random() * Math.floor(2));
	for (var el in Survey2) {
		if (Survey2.hasOwnProperty(el)) {
			sum += parseFloat(Survey2[el]);
		}
	}
	Survey2_attitude = sum / 5;
	return Survey2_attitude;

};
const survey2value = computeAttitudeSurvey2();

//Calculate result of Survey 3 on Life Satisfaction from survey item values stored in local storage.  Code taken and lightly modified from surveyPage.component.jsx written by Arti.  Sums the five-item survey results and divides by 5 to equalize data for display next to the other two surveys.
const computeAttitudeSurvey3 = () => {
	console.log('computing Survey3 attitude');
	let Survey3 = JSON.parse(localStorage.getItem('Survey3'));
	let Survey3_attitude = 0;
	let sum = 0;
	const experimentCondition = Math.floor(Math.random() * Math.floor(2));
	for (var el in Survey3) {
		if (Survey3.hasOwnProperty(el)) {
			sum += parseFloat(Survey3[el]);
		}
	}
	Survey3_attitude = sum / 5;
	return Survey3_attitude;

};
const survey3value = computeAttitudeSurvey3();

//Calculate result of Survey 4 on Covid-19 Vaccine Intention from survey item values stored in local storage.  Code taken and lightly modified from surveyPage.component.jsx written by Arti.  Sums the four-item survey results and divides by 4 to equalize data for display next to the other two surveys.
const computeAttitudeSurvey4 = () => {
	console.log('computing Survey4 attitude');
	let Survey4 = JSON.parse(localStorage.getItem('Survey4'));
	let Survey4_attitude = 0;
	let sum = 0;
	const experimentCondition = Math.floor(Math.random() * Math.floor(2));
	for (var el in Survey4) {
		if (Survey4.hasOwnProperty(el)) {
			sum += parseFloat(Survey4[el]);
		}
	}
	Survey4_attitude = sum / 4;
	return Survey4_attitude;

};
const survey4value = computeAttitudeSurvey4();



//Barchart code lightly modified and taken from CanvasJS https://canvasjs.com/react-charts/bar-chart/
class BarChart extends Component {
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			//Sets chart labels
			title: {
				text: "Results"
			},
			axisX: {
				title: "Measures",
				reversed: true,
			},
			axisY: {
				title: "Potential Harm (Higher Score = Healthier Mind)",
				labelFormatter: this.addSymbols
			},
			//Inputs data calculated above into the chart.
			data: [{
				type: "bar",
				dataPoints: [
					{ y: survey2value, label: "General Calm" },
					{ y: survey3value, label: "Life Satisfaction" },
					{ y: survey4value, label: "Trust of Institutions" }

				]
			}]
		}

		return (
			<div>
				<h1>Your Personal Digital Harm Vulnerability</h1>
				<CanvasJSChart options={options}
					onRef={ref => this.chart = ref}
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}
//Exports the barchart to be called and displayed
export default BarChart;