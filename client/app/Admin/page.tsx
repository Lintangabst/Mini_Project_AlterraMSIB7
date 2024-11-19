'use client'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AdminCrud from '../components/adminCrud';


function MyApp() {
  return (
    <Provider store={store}>
      <AdminCrud />
    </Provider>
  );
}

export default MyApp;
