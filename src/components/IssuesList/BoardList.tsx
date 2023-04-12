import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { Issue } from "../Issue/Issue";

interface BoardListProps {
	issues: IssuesInterface[],
	title: string,
}

export const BoardList: FC<BoardListProps> = ({ issues, title }) => {
	return (
		<div className="boardListWrapper">
			<h3>{title}</h3>
			<ul className="issuesList">
				{
					issues.length > 0 &&
					issues.map(issue => <Issue key={issue.id} issue={issue} />)
				}
			</ul>
		</div>
	)
}