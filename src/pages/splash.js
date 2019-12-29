import React, {useState,useContext} from 'react';
import styles from '../styles/style';
import { View, Alert } from 'react-native';
import { Button,Text } from '@ui-kitten/components';
import MyContext from '../store/context1';
import { useStoreState } from 'easy-peasy';

const Splash = (props) => {

	let [t1,updateT1] = useState("Hello");
	const UserName = useContext(MyContext);

	function thisTest(){
		if(t1=="Hello2"){
			updateT1("No2");
		}
		else{
			updateT1("Hello2");
		}
	}

	const todos = useStoreState(state => state.user)


	return(
		<View styles={styles.conts}>
			<Button onPress={thisTest}>{t1}</Button>
			<Button>{todos}</Button>
			<Button onPress={()=>{Alert.alert("Yo","Test");}}>Alerts</Button>
			<Button onPress={() => props.navigation.navigate('Home',{test:"tes"})}>Another Day</Button>
		</View>
	);
}

Splash.navigationOptions = ({ navigation }) => ({
	title: "Stories",
	headerShown: false
})

export default Splash;
