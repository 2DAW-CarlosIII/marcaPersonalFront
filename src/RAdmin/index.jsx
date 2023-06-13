import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
//import { dataProvider } from '../dataProvider';
import { authProvider } from '../authProvider';
import { ProyectoCreate, ProyectoList, ProyectoEdit } from './proyectos';
import { UserCreate, UserList, UserEdit } from './users';
import jsonapiClient from 'ra-jsonapi-client';

const dataProvider = jsonapiClient('http://marcapersonal.com/api');


export const RAdmin = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
        basename="/dashboard"
	>
        <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        <Resource name="proyectos" list={ProyectoList} edit={ProyectoEdit} create={ProyectoCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
);
