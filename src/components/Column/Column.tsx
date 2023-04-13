import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { Issue } from "../Issue/Issue";
import { ColumnType } from "../../utils/enums";

interface ColumnProps {
	issues?: IssuesInterface[],
	column: ColumnType,
	setIssues: (issues:IssuesInterface[]) => void,
}

export const Column: FC<ColumnProps> = ({ issues, column, setIssues }) => {

	// const [currentCard, setCurrentCard] = useState<IssuesInterface>();

	return (
		<div className="board__list-wrapper">
			<h3 className="board__list-title">{column}</h3>
			<ul className="issues__list">
				{
					(issues && issues.length > 0) &&
					issues.map((issue, index) =>
						<Issue
							setIssues={setIssues}
							issuesList={issues}
							key={issue.id}
							index={index}
							issue={issue}
						/>)
				}
			</ul>
		</div>
	)
}