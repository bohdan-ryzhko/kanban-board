import { ColumnType } from "../utils/enums"

export interface IssuesInterface {
	number: number,
	id: number,
	title: string,
	created_at: string,
	updated_at: string,
	comments: number,
	state: string,
	column: ColumnType,
}
