import { Route, Routes } from 'react-router-dom';

import { Route as RouteEnum } from './routes/route.enum';
import { WelcomePage } from './pages';

function App() {
	return (
		<Routes>
			<Route path={RouteEnum.General} element={<WelcomePage />} />
		</Routes>
	);
}

export default App;
