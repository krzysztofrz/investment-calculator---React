import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
	console.log(input);
	const resultsData = calculateInvestmentResults(input);
	console.log(resultsData);
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Savings End of Year</th>
					<th>Annual Investment</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAnnualInvestment = yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAnnualInvestment)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
