import { observer } from 'mobx-react-lite';
import logo from '../logo.svg';
import { mainStore } from '../stores/MainStore';

export const Home: React.FC = observer(() => {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>react-typescript-mobx-router</p>
                <p>my favorite client setup</p>
                <p>
                    MobX test {':)'} {mainStore.count}
                </p>
                <button onClick={() => mainStore.countUp()}>count ++</button>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
});
