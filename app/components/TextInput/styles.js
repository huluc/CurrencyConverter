import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const styles = EStyleSheet.create({
	$buttonBackgroundColorBase: '$white',
	$buttonBackgroundColorModifier: 0.1,
	container: {
		backgroundColor: '$white',
		width: '90%',
		height: INPUT_HEIGHT,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 11,
		borderRadius: BORDER_RADIUS,
	},
	containerDisabled: {
		backgroundColor: '$lightGray',
	},
	buttonContainer: {
		borderBottomLeftRadius: BORDER_RADIUS,
		borderTopLeftRadius: BORDER_RADIUS,
		height: INPUT_HEIGHT,
		width: 90,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '$white',
	},
	buttonText: {
		color: '$primaryBlue',
		fontWeight: '600',
		fontSize: 20,
		paddingHorizontal: 16,
	},
	input: {
		flex: 1,
		paddingHorizontal: 8,
		fontSize: 18,
		color: '$inputText',
	},
	border: {
		backgroundColor: '$border',
		height: INPUT_HEIGHT,
		width: StyleSheet.hairlineWidth,
	},


});

export default styles;
