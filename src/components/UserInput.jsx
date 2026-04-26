export default function UserInput({ onChangeInput, userInput }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="initial-investment">Initial Investment ($)</label>
					<input
						type="number"
						required
						onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
						value={userInput.initialInvestment}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Annual Investment ($)</label>
					<input
						type="number"
						required
						onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
						value={userInput.annualInvestment}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">Expected Return (%)</label>
					<input
						type="number"
						required
						onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
						value={userInput.expectedReturn}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						required
						onChange={(e) => onChangeInput("duration", e.target.value)}
						value={userInput.duration}
					/>
				</p>
			</div>
		</section>
	);
}
