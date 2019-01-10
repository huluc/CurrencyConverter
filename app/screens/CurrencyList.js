import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
	handlePress = () => {
		alert('The row is pressed!');
	};

	render() {
		return (
			<FlatList
				data={currencies}
				renderItem={({ item }) =>
					<ListItem
						onPress={this.handlePress}
						text={item}
						selected={item === TEMP_CURRENT_CURRENCY}
						visible={true}
					/>
				}
				keyExtractor={item => item}
				ItemSeparatorComponent={Separator} />
		);
	}

}

export default CurrencyList;

