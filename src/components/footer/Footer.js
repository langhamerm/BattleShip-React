import { FooterComponent, FooterText } from '../styled_components/footerStyles';
import FooterLinks from './FooterLinks';
import React from 'react';

export default function Footer() {
	return (
		<FooterComponent>
			<FooterLinks />
			<FooterText>
				Created by Mark Langhamer
			</FooterText>
		</FooterComponent>
	);
}
