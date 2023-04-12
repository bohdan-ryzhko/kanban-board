import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { BoardList } from "../IssuesList/BoardList";

interface IssuesBoardProps {
	issues: IssuesInterface[]
}

export const IssuesBoard: FC<IssuesBoardProps> = ({ issues }) => {
	return (
		<section>
			<div className="container">
				<ul className="sectionList">
					<li className="issuesBoard">
						<BoardList title="ToDo" issues={issues} />
					</li>
				</ul>
			</div>
		</section>
	)
}
