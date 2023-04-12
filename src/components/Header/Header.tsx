import { FC } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SearchFormProps } from "../../interfaces/SearchFormProps";

export const Header: FC<SearchFormProps> = ({ setSearchUrl }) => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<SearchForm setSearchUrl={setSearchUrl} />
				</div>
			</div>
		</header>
	)
}
