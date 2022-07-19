import { observer } from 'mobx-react-lite';
import { mainStore } from '../stores/MainStore';

export const BasicComp: React.FC = () => {
    return <div className='basic-comp-main'></div>;
};

export const BasicCompMobx: React.FC = observer(() => {
    return <div className='basic-comp-mobx-main'></div>;
});

// import React from 'react';
// import ReactPlayer from 'react-player';
// import './Player.scss';

// interface IPlayer {
//     currentTimeCallback: (t: number) => void;
// }

// const Player: React.FC<IPlayer> = (p: IPlayer) => {
//     return (
//         <div className='player-component'>
//             <ReactPlayer
//                 url='https://www.youtube.com/watch?v=php8rANiCfU'
//                 onProgress={(e) => {
//                     p.currentTimeCallback(Math.floor(e.playedSeconds));
//                 }}
//                 controls={true}
//                 width={'100%'}
//             />
//         </div>
//     );
// };

// export default Player;

// interface ISongLine {
//     lineData: SongLineData;
//     isCurrentLine: boolean;
// }

// const SongLine: React.FC<ISongLine> = ({ lineData, isCurrentLine }) => {
//     const _getLineWithTranslation = (): JSX.Element => {
//         const wordsArray = lineData.text.split(/(?:,| )+/);
//         const res = wordsArray.map((word) => {
//             const _word: string = word.toLocaleLowerCase();
//             const _data: WordTranslation = dictionary[_word];
//             if (_data) {
//                 return <TranslatedWord word={_word} data={_data} />;
//             } else {
//                 return <span>{_word}</span>;
//             }
//         });
//         return <div className='translated-line'>{res}</div>;
//     };

//     return <div className={`song-line-main ${isCurrentLine ? 'active' : ''}`}>{_getLineWithTranslation()}</div>;
// };
