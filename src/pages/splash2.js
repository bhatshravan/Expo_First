import React, {useState,useContext} from 'react';
import styles from '../styles/style';
import { View, Alert } from 'react-native';
import { Button,Text } from '@ui-kitten/components';
import MyContext from '../store/context1';

export default function Splash(){
	let [t1,updateT1] = useState("Hello");
	const UserName = useContext(MyContext);
	const numbers = [1, 2, 3, 4, 5];
	const listItems = numbers.map((number) =>
		<Text>{number}</Text>
	);

	function thisTest(){
		if(t1=="Hello2"){
			updateT1("No2");
		}
		else{
			updateT1("Hello2");
		}
	}


	return(
		<View styles={styles.conts}>
			<Button onPress={thisTest}>{t1}{UserName}</Button>
			<Button onPress={()=>{Alert.alert("Yo","Test");}}>Alerts</Button>
			{/* {listItems} */}
		</View>
	);
}

// export default Splash;
