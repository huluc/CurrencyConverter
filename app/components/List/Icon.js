import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

type Props = {
	checkMark: boolean,
	visible: boolean,
	iconBackGround: string
}
const Icon = (props: Props) => {
	const { checkMark, visible, iconBackGround } = props;
	const iconStyles = [styles.icon];
	if (visible) {
		iconStyles.push(styles.iconVisible);
	}
	if (iconBackGround) {
		iconStyles.push({ backgroundColor: iconBackGround });
	}
	return (
		<View style={iconStyles}>
			{checkMark ? <Image
				source={require('./images/check.png')}
				style={styles.checkIcon}
				resizeMode="contain"
			/> : null}

		</View>
	);
};
export default Icon;
