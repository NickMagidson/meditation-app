import React from "react";
import Gear from '../imgs/gear.png'
import Modal from "./Modal";

function Header() {
	return (
		<>
			<header>
				<div className="left-side">
					<h1 className="title">Tranquility</h1>
				</div>

				<div className="right-side">
					<button className="settings-button">
						<img id="gear" src={Gear} />
					</button>

					<Modal>
						Settings Menu
					</Modal>
					 
				</div>
			</header>
			<div className="line-divider"></div>
		</>
	)
}

export default Header;