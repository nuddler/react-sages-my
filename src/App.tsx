import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { SearchPage } from './components/SearchPage/SearchPage';
import './typescript-demo';
import { Route } from 'react-router';
import { HomePage } from './components/pages/HomePage';
import { ContactPage } from './components/pages/ContactPage';
import { withTitle } from './components/withTitle';

function App() {
  return (
    <div>
      <Navbar />
      <main className="container mt-3">
        <Route
          path={['/', '/home']}
          exact
          component={withTitle(HomePage, 'Home')}
        />
        <Route path="/contact" component={withTitle(ContactPage, 'Contact')} />
        <Route path="/search" component={SearchPage} />
      </main>
    </div>
  );
}

export default App;
