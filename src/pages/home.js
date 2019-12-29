import React, { Component } from 'react';
import { Text } from '@ui-kitten/components';
import { StyleSheet,View } from "react-native";
import styles from '../styles/style';
import { useStoreState,useStoreAction } from 'easy-peasy';

class Home extends Component {
	state = {
		selectedIndex: [0,1,2]
	}
	renderLists(){
		
		// let todos = this.useStoreState(state => state.todos.items);
		// console.log(todos);
		let c = this.state.selectedIndex;
		let b=[]
		c.map(element=>{
			b.push(<Text category="h3" style={styles.white} key={element}>{element}</Text>)
		});
		
		return b;
	}
	
	render() {
		const { navigation } = this.props;
		return (
				<View category="h2" style={styles.conts}>
					{this.renderLists()}
					<Text>{navigation.getParam('test', 'NO-ID')}</Text>
					<Text>Test</Text>
				</View>
			
		)
	}
}


export default Home;
