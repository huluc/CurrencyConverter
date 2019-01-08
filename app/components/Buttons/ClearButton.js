//@flow
import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from './styles';

type Props = {
	onPress: function,
	text: string,
};

const ClearButton = (props: Props) => {
	const { onPress, text } = props;
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.wrapper} >
				<Image resizeMode='contain' style={styles.icon} source={require('./images/icon.png')}/>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};
export default ClearButton;






