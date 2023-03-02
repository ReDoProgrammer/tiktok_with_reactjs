import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {publicRoutes} from './components/routes' 
import DefaultLayout from './components/Layout/DefaultLayout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null? Fragment: DefaultLayout;// nếu trong route không set layout (null) thì dùng Fragement, ngược lai thì mặc định sẽ là defaultlayout
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
