import React from 'react';

import CardItem from './CardItem.component';

function PortfolioCards() {
	return(
		<div className="cards">
			<div className="cards_container">
				<div className="cards_wrapper">
					<ul className="cards_items">
						<CardItem
							src="../../../images/portfolio_icons/map1040.png"
							text="MAP 1040"
							label="Squarespace"
							path="https://map1040.com/"
							description="Update for Non-Profit with modern and minimal design."
						/>
						<CardItem
							src="../../../images/portfolio_icons/gamegoals.png"
							text="Game Goals App"
							label="iOs"
							path="https://gamegoalsapp.com/"
							description="Starter iOs only application for tracking video game goals."
						/>
					</ul>
					<ul className="cards_items">
						<CardItem
							src="../../../images/portfolio_icons/sozochurch.png"
							text="Sozo Church"
							label="Squarespace"
							path="https://sozo.co/"
							description="Full web package with stronger lean towards creative elements."
						/>
						<CardItem
							src="../../../images/portfolio_icons/storagegives.png"
							text="Storage Gives"
							label="Squarespace"
							path="https://storagegives.com/"
							description="New website for Non-Profit with custom CSS and integrations."
						/>
						<CardItem
							src="../../../images/portfolio_icons/shredhedz.png"
							text="Shredhedz"
							label="Squarespace"
							path="https://www.shredhedz.com/"
							description="Base business web package with branding."
						/>
					</ul>
				</div>
			</div>
		</div>
		);
}

export default PortfolioCards;