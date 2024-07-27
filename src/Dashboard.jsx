import React from "react";
import on from "./assets/image.png";

const Dashboard = () => {
	const approved = 1091994;
	const unapproved = 80102;
	const total = approved + unapproved;
	const approvedPercentage = (approved / total) * 100;
	const unapprovedPercentage = (unapproved / total) * 100;
	return (
		<div className="dashboard-container">
			<div className="card1 autopilot-container">
				<div>Autopilot</div>
				<img src={on} alt="button" className="img"></img>
				<div>Enabled</div>
			</div>
			<div className="card2 savings-summary">
				<div className="summary-details">
					<span className="heading">Savings Summary</span>
					<div className="summary-detail">
						<span className="dot1"></span>
						<span>Approved</span>
						<span>${approved.toLocaleString()}</span>
					</div>
					<div className="summary-detail">
						<span className="dot"></span>
						<span>Unapproved</span>
						<span>${unapproved.toLocaleString()}</span>
					</div>
				</div>
				<svg width="120" height="130" viewBox="0 0 36 36">
					<circle
						cx="18"
						cy="18"
						r="15.91549430918954"
						fill="none"
						stroke="#00cc99"
						strokeWidth="3.8"
						strokeDasharray={`${approvedPercentage} ${
							100 - approvedPercentage
						}`}
						strokeDashoffset="25"
					/>
					<circle
						cx="18"
						cy="18"
						r="15.91549430918954"
						fill="none"
						stroke="#ff6666"
						strokeWidth="3.8"
						strokeDasharray={`${unapprovedPercentage} ${
							100 - unapprovedPercentage
						}`}
						strokeDashoffset={`-${approvedPercentage - 25}`}
					/>
				</svg>
			</div>
			<div className="card expenditure-savings">
				<div>Annual Expenditure</div>
				<div>$1,020,123.23</div>
			</div>
			<div className="card expenditure-savings">
				<div>Annual Savings</div>
				<div>$677,191.90</div>
			</div>
		</div>
	);
};

export default Dashboard;
