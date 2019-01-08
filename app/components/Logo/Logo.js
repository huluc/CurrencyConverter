import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Image } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 500;

class Logo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logoLength: new Animated.Value(1),
		};
	}

	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	_keyboardDidShow = () => {
		Animated.timing(
			this.state.logoLength,
			{
				toValue: 0,
				duration: ANIMATION_DURATION,
			},
		).start();

	};

	_keyboardDidHide= ()=> {
		Animated.timing(
			this.state.logoLength,
			{
				toValue: 1,
				duration: ANIMATION_DURATION,
			},
		).start();

	}

	render() {
		const { logoLength } = this.state;
		const length = logoLength.interpolate({
			inputRange: [0, 1],
			outputRange: [styles.$smallContainerSize, styles.$largeContainerSize],
		});
		const margin = logoLength.interpolate({
			inputRange: [0, 1],
			outputRange: [25, 50],
		});

		const logoContainerStyle = [
			styles.logoContainer,
			{ height: length, width: length },
		];

		const innerImageStyle = [
			styles.logo,
			{
				left: margin,
				top: margin,
				right: margin,
				bottom: margin,
			},
		];

		return (
			<View style={styles.container}>
				<Animated.View style={logoContainerStyle}>
					<Image
						resizeMode="contain"
						style={styles.containerImage}
						source={require('./images/background.png')}
					/>
					<Animated.Image
						resizeMode="contain"
						style={innerImageStyle}
						source={require('./images/logo.png')}
					/>
				</Animated.View>
				<Text style={styles.text}>Currenty Converter</Text>
			</View>
		);
	}
}


export default Logo;
