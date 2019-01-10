import * as React from 'react';

import arrowForward from './arrowForward';
import link from './link';

const svgs ={
	arrowForward,
	link
};

type Props = {
	name: $Keys<typeof svgs>,
	tintColor?: string,

	opacity?: number | string,
	width?: number,
	height?: number,

	viewBox?: string,
	preserveAspectRatio?: string,
}

const SvgIcon = (props: Props) => {
	const Target = svgs[props.name];
	return <Target {...props} />;
};

// SvgIcon.defaultProps = {
// 	tintColor: 'white',
// };

export default SvgIcon;

export const hasIcon = (name: string): boolean => name in svgs;
