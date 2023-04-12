import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { initialValues } from "../../constants/initialValues";
import { Button } from 'react-bootstrap';

import { IInitialValues } from "../../interfaces/IInitialValues";
import { SearchFormProps } from "../../interfaces/SearchFormProps";

export const SearchForm:FC<SearchFormProps> = ({ setSearchUrl }) => {

	const submitForm = (values: IInitialValues, { resetForm }: FormikHelpers<IInitialValues>) => {
		setSearchUrl(values.searchValue.slice(19));
		resetForm();
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={submitForm}
		>
			<Form className="search__form">
				<label className="label__input" htmlFor="searchValue">
					<Field
						id="searchValue"
						className="search__input"
						type="text"
						name="searchValue"
						placeholder="Enter repo URL"
					/>
				</label>
				<Button className="submit__btn" type="submit">Load issues</Button>
			</Form>
		</Formik>
	)
}
