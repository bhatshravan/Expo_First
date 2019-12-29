import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet,View } from "react-native";
import styles from '../styles/style';

class Home extends Component {
	state = {
		selectedIndex: [0,1,2]
	}
	renderLists(){
		let c = this.state.selectedIndex;
		let b=[]
		c.forEach(element=>{
			b.push(<Text category="h3" style={styles.white}>{element}</Text>)
		});
		console.log(b);
		return b;
	}

	render() {
		return (
				<View category="h2" style={styles.conts}>{this.renderLists()}</View>
			
		)
	}
}


export default Home;
