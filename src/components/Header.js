import React, { useState } from "react";
import Gear from '../imgs/gear.png'
import Modal from "./Modal";

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header>
				<div className="left-side">
					<h1 className="title">Tranquility</h1>
				</div>

				<div className="right-side">
					<button onClick={() => setIsOpen(true)} className="settings-button">
						<img id="gear" src={Gear} />
					</button>

					<Modal open={isOpen} onClose={() => setIsOpen(false)}>
						Settings Menu
					</Modal>
					 
				</div>
			</header>
			<div className="line-divider"></div>
		</>
	)
}

export default Header;