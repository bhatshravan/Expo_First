import React,{ Component } from 'react';
import { StyleSheet,View, ScrollView } from "react-native";
import { Button,Text } from '@ui-kitten/components';


class Splash extends Component {
	constructor(props) {
		super(props);
		this.y=0;
	}

	state = {
		select: "Hello world"
	}

	changePress(){
		
		if(this.y==0){
			this.setState({select: "No world"});
			this.y=1;
		}
		else{
			this.setState({select: "Hello world"});
			this.y=0;
		}
	}


	render() {
		return (
			// <View >
				<View style={styles.container}>
				<Button onPress={()=>this.changePress()}>Test</Button>
				<Text category='h1' status='primary' style={styles.Texts}>{this.state.select}</Text>
				</View>
			// </View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		color: '#fff',
		padding: 16,
		margin: 30,
		backgroundColor: "#ffaa20",
		justifyContent: "center",
		alignItems:"center"
	},
	Texts: {
		// flex:0.5
	},
	White:{
		color:'#fff'
	}
});


export default Splash;