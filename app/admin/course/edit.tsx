import { SimpleForm, Create, TextInput, required } from 'react-admin';

export const CourseEdit = () => {
	return (
		<Create>
			<SimpleForm>
				<TextInput source="id" validate={[required()]} label="id" />
				<TextInput source="title" validate={[required()]} label="Title" />
				<TextInput source="image" validate={[required()]} label="Image" />
			</SimpleForm>
		</Create>
	);
};
