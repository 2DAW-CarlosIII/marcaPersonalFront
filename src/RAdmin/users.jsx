import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
} from 'react-admin';

import { useRecordContext } from 'react-admin';
import { useMediaQuery } from '@mui/material';

const userFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    // <ReferenceInput source="docente_id" label="User" reference="users" />
];

export const UserList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <List filters={userFilters} >
            {isSmall ? (
                <SimpleList
                    primaryText="%{first_name}"
                    secondaryText={(record) => record.email}
                    tertiaryText="%{proyectos}"
                    linkType={(record) => (record.canEdit ? 'edit' : 'show')}
                >
                    <EditButton />
                </SimpleList>
            ) : (
                <Datagrid bulkActionButtons={false}>
                    <TextField source="id" />
                    {/* <ReferenceField source="docente_id" reference="users" /> */}
                    <TextField source="first_name" />
                    <TextField source="email" />
                    <TextField source="proyectos" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

const UserTitle = () => {
    const record = useRecordContext();
    return <span>User {record ? `"${record.first_name}"` : ''}</span>;
};

export const UserEdit = () => (
    <Edit title={<UserTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            {/* <ReferenceInput source="docente_id" reference="users" /> */}
            <TextInput source="first_name" />
            <TextInput source="email" />
            <TextInput source="proyectos" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            {/* <ReferenceInput source="docente_id" reference="users" /> */}
            <TextInput source="first_name" />
            <TextInput source="email" />
            <TextInput source="proyectos" />
        </SimpleForm>
    </Create>
);