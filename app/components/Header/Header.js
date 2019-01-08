//@flow
import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import styles from './styles';

type Props ={
	onPress:function
}
const Header = (props :  Props) =>{
	const {onPress} = props
	return (
	<View style={styles.container}>
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')} />
		</TouchableOpacity>
	</View>
);}

export default Header;

