import ReactOnRails from 'react-on-rails';
import HomePage from './bundles/HomePage';
import LoginPage from './bundles/LoginPage';
import RegisterPage from './bundles/RegisterPage';
import PostingPage from './bundles/PostingPage';
import EventPage from './bundles/EventPage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HomePage,
  LoginPage,
  RegisterPage,
  PostingPage,
  EventPage
});
