import axios from 'axios';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ItemsList } from '../components/ItemsList/ItemsList';
import logo from '../logo.svg';
// import { mainStore, User } from '../stores/MainStore';

export const Home: React.FC = observer(() => {
    // const addUser = (): void => {
    //     const user = new User('nir');
    //     mainStore.addUser(user);
    //     // console.log(toJS(mainStore.testUsers));
    //     // console.log([...mainStore.testUsers]);
    // };

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log('data fetched', data);
    }, [data]);

    const fetchData = async () => {
        const url: string = 'https://jsonplaceholder.typicode.com/posts';
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    return (
        <div className='App'>
            {data ? (
                <div className='main-container'>
                    <ItemsList items={data} />
                </div>
            ) : (
                <div>no data</div>
            )}
            {/* <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>react-typescript-mobx-router</p>
                <p>
                    MobX test {':)'} {mainStore.count}
                </p>
                {mainStore.testUsers.length && (
                    <div>{`TEST USERS ${mainStore.testUsers[0].name}`}</div>
                )}
                <button onClick={() => mainStore.countUp()}>count ++</button>
            </header> */}
        </div>
    );
});
