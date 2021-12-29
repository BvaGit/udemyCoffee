

import Header from '../Heder/Header';
import './main.scss';

const Main = ({routing}) => {

    return(
        <header className='header_main'>
            <div className='wrapper'>
                <Header routing={routing}/>
                <h1>Everything You Love About Coffee</h1>
            </div>
        </header>

    )
}

export default Main;