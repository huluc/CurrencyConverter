//@flow
import React from 'react'
import {Text} from 'react-native'
import moment from 'moment';
import styles from './styles'

type Props = {
	base:string,
	quote:string,
	conversionRate: number,
	date : Date,
}
const LastConverted = (props:Props)=>{
	const{base, quote, conversionRate, date} = props;
	return(
		<Text style={styles.smallText}>
			1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
		</Text>
	)
}
 export default LastConverted;
