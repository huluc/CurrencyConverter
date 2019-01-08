import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	container: {
		position: 'absolute',
		right: 0,
		left: 0,
		top: 0,
		'@media ios': {
			paddingTop: 20,
		},
	},
	button: {
		alignSelf: 'flex-end',
		paddingVertical: 5,
		paddingHorizontal: 20,
	},
	icon: {
		width: 15,
	},
});

export default styles;
