import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { getNormalizeTime } from "../../services/getNormalizeTime";

interface IssueProps {
	issue: IssuesInterface
}

export const Issue: FC<IssueProps> = ({ issue: { title, comments, number, created_at, updated_at, state } }) => {
	return (
		<li className="issue">
			<h3>{title}</h3>
			<div className="issuesInfo">
				<p>
					<span>#</span>
					<span>{number}</span>
				</p>
				<p>
					<span>Created:</span>
					<span>{getNormalizeTime(created_at)}</span>
				</p>
				<p>
					<span>Updated:</span>
					<span>{getNormalizeTime(updated_at)}</span>
				</p>
				<p>
					<span>{state}</span>
					<span>|</span>
					<span>Comments:</span>
					<span>{comments}</span>
				</p>
			</div>
		</li>
	)
}