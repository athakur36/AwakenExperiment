import React, { Component } from 'react';
import CanvasJSReact from '../constants/canvasjs.react.js';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Sct from '../components/questionnaire-format/sct.component';
import { IV_Surveys } from '../model/IV-Surveys-Data';
import LikertMatrix from '../components/questionnaire-format/likertMatrix.component';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import firebase from '../firebase/firebase.utils';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;


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
	localStorage.setItem('Survey2_attitude', JSON.stringify(Survey2_attitude));
	localStorage.setItem(
		'experiment_condition',
		JSON.stringify(experimentCondition)
	);
	console.log(Survey2_attitude);
	console.log(typeof Survey2);

};
const survey2value = computeAttitudeSurvey2();


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
	localStorage.setItem('Survey3_attitude', JSON.stringify(Survey3_attitude));
	localStorage.setItem(
		'experiment_condition',
		JSON.stringify(experimentCondition)
	);
	console.log(Survey3_attitude);
	console.log(typeof Survey3);

};
const survey3value = computeAttitudeSurvey3();


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
	localStorage.setItem('Survey4_attitude', JSON.stringify(Survey4_attitude));
	localStorage.setItem(
		'experiment_condition',
		JSON.stringify(experimentCondition)
	);
	console.log(Survey4_attitude);
	console.log(typeof Survey4);

};
const survey4value = computeAttitudeSurvey4();




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

export default BarChart;