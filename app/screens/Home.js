import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ClearButton from '../components/Buttons/ClearButton';
import LastConverted from '../components/Text/LastConverted'
import Header from '../components/Header/Header'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'TL';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '400';
const TEMP_CONVERSION_RATE = 4.5;
const TEMP_CONVERSION_DATE= new Date();


class Home extends Component {
	handlePressBaseCurrency = () => {
		console.log('press base');
	};

	handlePressQuoteCurrency = () => {
		console.log('press base');
	};

	handleSwapCurrency = () => {
		console.log('press swap currency');
	};

	handleChangeText = () => {
		console.log('change text');
	};
	handleOptionsPress = () => {
		console.log('change text');
	};

	render() {
		return (
			<Container>
				<StatusBar translucent={false} barStyle={'light-content'} />
				<Header onPress = {this.handleOptionsPress}/>
				<KeyboardAvoidingView  behavior="padding" enabled>
				<Logo />
				<InputWithButton buttonText={TEMP_BASE_CURRENCY} onPress={this.handlePressBaseCurrency}
				                 defaultValue={TEMP_BASE_PRICE} keyboardType='numeric'
				                 onChangeText={this.handleChangeText} />
				<InputWithButton buttonText={TEMP_QUOTE_CURRENCY} onPress={this.handlePressQuoteCurrency}
				                 editable={false} defaultValue={TEMP_QUOTE_PRICE} />
				<LastConverted
					base = {TEMP_BASE_CURRENCY}
					quote={TEMP_QUOTE_CURRENCY}
					conversionRate={TEMP_CONVERSION_RATE}
					date = {TEMP_CONVERSION_DATE}
				/>
				<ClearButton onPress={this.handleSwapCurrency} text={"Reverse Currencies"} />
				</KeyboardAvoidingView>
			</Container>);
	}
}

export default Home;
