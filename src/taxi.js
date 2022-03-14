import Header from './components/header/header';
import Form from './components/form/form';
import { Fragment } from 'react';

const Taxi = () => {
    return(
    <div className='taxi'>
        <div>
        <Header/>
        <Form/>
        </div>
    </div>
    )
}

export default Taxi;