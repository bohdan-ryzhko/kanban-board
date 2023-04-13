import { FC, DragEvent, useState } from "react";
import { IssuesInterface } from "../../interfaces/IssuesInterface";
import { getNormalizeTime } from "../../services/getNormalizeTime";
import { ColumnType } from "../../utils/enums";

interface IssueProps {
	index: number,
	issue: IssuesInterface,
	issuesList: IssuesInterface[],
	setIssues: (issues:IssuesInterface[]) => void,
}

export const Issue: FC<IssueProps> = ({ index, issue, issuesList, setIssues }) => {

	const [currentBoard, setCurrentBoard] = useState<IssuesInterface[]>();
	const [currentItem, setCurrentItem] = useState<IssuesInterface>(issuesList[0]);

	const dragOverHandler = (e: DragEvent<HTMLLIElement>) => {
		e.preventDefault();

		if (e.currentTarget.className === "issue") {
			e.currentTarget.style.boxShadow = "0 0px 10px black";
		}
	}

	const dragLeaveHandler = (e: DragEvent<HTMLLIElement>) => {
		e.currentTarget.style.boxShadow = "none";
		setCurrentBoard(issuesList);
		setCurrentItem(issue);
	}

	const dragStartHandler = (e: DragEvent<HTMLLIElement>, issue: IssuesInterface, issuesList: IssuesInterface[]) => {
		if (issue !== undefined && issuesList.length > 0) {
			setCurrentBoard(issuesList);
			setCurrentItem(issue);
		}
	}

	const dragEndHandler = (e: DragEvent<HTMLLIElement>) => {
		e.currentTarget.style.boxShadow = "none";
	}

	const dropHandler = (e: DragEvent<HTMLLIElement>, issue: IssuesInterface, issuesList: IssuesInterface[]) => {
		if (currentBoard !== undefined) {
			e.preventDefault();

			const currentIndex = currentBoard?.indexOf(currentItem)
			currentBoard?.splice(currentIndex, 1);

			const dropIndex = issuesList?.indexOf(currentItem)
			currentBoard?.splice(dropIndex + 1, 0, currentItem);

			console.log(dropIndex);
			console.log(currentIndex);
		}
	}

	return (
		<li
			onDragOver={(e: DragEvent<HTMLLIElement>) => dragOverHandler(e)}
			onDragLeave={(e: DragEvent<HTMLLIElement>) => dragLeaveHandler(e)}
			onDragStart={(e: DragEvent<HTMLLIElement>) => dragStartHandler(e, issue, issuesList)}
			onDragEnd={(e: DragEvent<HTMLLIElement>) => dragEndHandler(e)}
			onDrop={(e: DragEvent<HTMLLIElement>) => dropHandler(e, issue, issuesList)}
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