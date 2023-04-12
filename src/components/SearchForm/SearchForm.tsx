import { FC } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { initialValues } from "../../constants/initialValues";

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
			<Form>
				<Field type="text" name="searchValue" />
				<button type="submit">Load issues</button>
			</Form>
		</Formik>
	)
}
