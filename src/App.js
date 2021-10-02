import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import SellerDashboard from './pages/SellerDashboard';
import Gallery from './pages/Gallery';

import Layout from './components/layout/Layout';
import ItemDetail from './components/ItemDetail.js';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/home' exact>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/signin'>
          <SignInPage />
        </Route>
        <Route path='/signup'>
          <SignUpPage />
        </Route>
        <Route path='/seller'>
          <SellerDashboard />
        </Route>
        <Route path='/gallery'>
          <Gallery />
        </Route>
        <Route path='/:itemId'>
          <ItemDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
