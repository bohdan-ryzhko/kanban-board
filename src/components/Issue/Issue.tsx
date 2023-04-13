import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { getNormalizeTime } from "../../services/getNormalizeTime";

interface IssueProps {
	index: number,
	issue: IssuesInterface,
}

export const Issue: FC<IssueProps> = ({ index, issue }) => {

	return (
		<li
			draggable={true}
			className="issue"
		>
			<h3>{issue.title}</h3>
			<div className="issues__info">
				<p>
					<span>#</span>
					<span>{issue.number}</span>
				</p>
				<p>
					<span>Created:</span>
					<span>{getNormalizeTime(issue.created_at)}</span>
				</p>
				<p>
					<span>Updated:</span>
					<span>{getNormalizeTime(issue.updated_at)}</span>
				</p>
				<p>
					<span>{issue.state}</span>
					<span>|</span>
					<span>Comments:</span>
					<span>{issue.comments}</span>
				</p>
			</div>
		</li>
	)
}