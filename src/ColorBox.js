import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export class ColorBox extends Component {
	render() {
		const { name, background } = this.props;
		return (
			<CopyToClipboard text={background}>
				<div style={{ background: background }} className="ColorBox">
					<div className="copy-container">
						<div className="box-content">
							<span>{name}</span>
						</div>
						<button className="copy-button">COPY</button>
					</div>
					<span className="see-more">MORE</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;