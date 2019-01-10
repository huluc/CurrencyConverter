import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

type Props = {
	onPress: function,
	text: string,
	selected: boolean,
	checkMark: boolean,
	visible: boolean,
	customIcon: any,
	iconBackGround: string
}
const ListItem = (props: Props) => {
	const { onPress, text, selected = false, checkMark = true, visible = true, customIcon = null, iconBackGround } = props;
	return (
		<TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
			<View style={styles.row}>
				<Text style={styles.text}>{text}</Text>
				{selected
					? <Icon checkMark={checkMark} visible={visible} iconBackGround={iconBackGround} />
					: <Icon />}
				{customIcon}
			</View>
		</TouchableHighlight>
	);

};

export default ListItem;
