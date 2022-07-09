import { observer } from 'mobx-react-lite';
import { mainStore } from '../stores/MainStore';

export const BasicComp: React.FC = () => {
    return <div className='basic-comp-main'></div>;
};

export const BasicCompMobx: React.FC = observer(() => {
    return <div className='basic-comp-mobx-main'></div>;
});
