import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import logo from '../logo.svg';
import { mainStore, User } from '../stores/MainStore';

export const Home: React.FC = observer(() => {
    const addUser = (): void => {
        const user = new User('nir');
        mainStore.addUser(user);
        // console.log(toJS(mainStore.testUsers));
        // console.log([...mainStore.testUsers]);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>react-typescript-mobx-router</p>
                <p>
                    MobX test {':)'} {mainStore.count}
                </p>
                {mainStore.testUsers.length && (
                    <div>{`TEST USERS ${mainStore.testUsers[0].name}`}</div>
                )}
                <button onClick={() => mainStore.countUp()}>count ++</button>
                <button onClick={() => addUser()}>add user</button>
            </header>
        </div>
    );
});
