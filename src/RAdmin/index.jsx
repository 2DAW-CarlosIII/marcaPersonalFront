import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from '../dataProvider';
import { authProvider } from '../authProvider';

export const RAdmin = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
        basename="/dashboard"
	>
        <Resource name="posts" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
		<Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    </Admin>
);
