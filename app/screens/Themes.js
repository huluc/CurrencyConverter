import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Separator } from '../components/List';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	$blue: '$primaryBlue',
	$green: '$primaryGreen',
	$orange: '$primaryOrange',
});

class Themes extends Component {
	handleThemePress = (color) => {
		alert('press theme', color);
	};

	render() {
		return (
			<ScrollView>
				<ListItem onPress={() => this.handleThemePress(styles.$blue)}
				          text="Blue"
				          selected
				          checkMark={false}
				          iconBackGround={styles.$blue}
				/>
				<Separator />
				<ListItem onPress={() => this.handleThemePress(styles.$orange)}
				          text="Orange"
				          selected
				          checkMark={false}
				          iconBackGround={styles.$orange}
				/>
				<Separator />
				<ListItem onPress={() => this.handleThemePress(styles.$green)}
				          text="Green"
				          selected
				          checkMark={false}
				          iconBackGround={styles.$green}
				/>
			</ScrollView>
		);
	}
}

export default Themes;
