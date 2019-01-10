import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Separator } from '../components/List';

import SvgIcon from '../assets/images';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
	handleThemePress = () => {
		alert('press themes');
	};
	handleSitePress = () => {
		alert('press Site');
	};

	render() {
		return (
			<ScrollView>
				<ListItem text="Themes" onPress={this.handleThemePress} customIcon={<SvgIcon name="arrowForward" />} />
				<Separator />
				<ListItem text="Web Site" onPress={this.handleSitePress} customIcon={<SvgIcon name="link" tintColor={ICON_COLOR}/>} />
			</ScrollView>
		);
	}
}

export default Options;
