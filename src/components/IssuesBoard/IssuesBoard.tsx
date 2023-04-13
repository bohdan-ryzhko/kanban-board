import { FC } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { Column } from "../Column/Column";
import { ColumnType } from "../../utils/enums";

interface IssuesBoardProps {
	issues?: IssuesInterface[],
	setIssues: (issues:IssuesInterface[]) => void
}

export const IssuesBoard: FC<IssuesBoardProps> = ({ issues, setIssues }) => {
	return (
		<section>
			<div className="container">
				<ul className="section__list">
					<li className="issues__board">
						<Column setIssues={setIssues} column={ColumnType.TO_DO} issues={issues} />
					</li>
					<li className="issues__board">
						<Column setIssues={setIssues} column={ColumnType.IN_PROGRESS} issues={[]} />
					</li>
					<li className="issues__board">
						<Column setIssues={setIssues} column={ColumnType.DONE} issues={[]} />
					</li>
				</ul>
			</div>
		</section>
	)
}
