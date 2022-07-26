import Audiobox from './Audiobox.js';
import StartButton from './StartButton.js';

function MainContainer(props) {

    const {changeTimerOn, changeAudioLevel} = props;
    return (

        <div class="maincont container">
            <h1 id="output">1:30</h1>
            <StartButton changeTimerOn={changeTimerOn}></StartButton>
            <Audiobox changeAudioLevel={changeAudioLevel}></Audiobox>
        </div>

    );

}

export default MainContainer;