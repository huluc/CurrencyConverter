import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
	$largeContainerSize: imageWidth,
	$largeImageSize: imageWidth / 2,
	$smallContainerSize: imageWidth / 2,
	$smallImageSize: imageWidth / 4,

	container: {
		alignItems: 'center',
		backgroundColor: 'red',
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerImage: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		height: null,
		width: null,
	},
	logo: {
		position: 'absolute',

		height: null,
		width: null,
	},
	text: {
		fontWeight: '600',
		fontSize: 28,
		letterSpacing: -0.5,
		marginTop: 15,
		color: '$white',
	},
});

export default styles;
