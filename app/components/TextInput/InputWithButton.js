/* @flow */
import React from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';

type Props = {
	buttonText: string,
	onPress: function,
	editable: true | false
}

const InputWithButton = (props: Props) => {
	const { buttonText, onPress, editable = true } = props;
	const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
	const containerStyles = [styles.container];
	if (editable === false) {
		containerStyles.push(styles.containerDisabled);
	}
	return (
		<View style={containerStyles}>
			<TouchableHighlight style={styles.buttonContainer} onPress={onPress} underlayColor={underlayColor}>
				<Text style={styles.buttonText}>
					{buttonText}
				</Text>
			</TouchableHighlight>
			<View style={styles.border} />
			<TextInput style={styles.input} {...props} />
		</View>
	);
};
//InputWithButton.defaultProps = {
//	editable:true
//}

export default InputWithButton;
