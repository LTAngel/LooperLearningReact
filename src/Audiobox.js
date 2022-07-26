import './App.js';

function Audiobox(props) {

    const {changeAudioLevel} = props;

    return (
        <div class="audiobox">
            <div>
                <h2>Settings</h2>
                <form action="" id="soundForm">
                    <label for="soundOptions">Sound:</label>
                    <select class="text-form-field" name="sounds" id="sounds">
                        <option value="Level Up">Level Up</option>
                        {/* <!--sounds from zapsplat--> */}

                        <option value="airplane bell">airplane bell</option>
                        <option value="whistle">whistle</option>
                        <option value="chime">chime</option>
                        <option value="bells">bells</option>
                        <option value="bells 2">bells 2</option>
                        <option value="beep">car beep</option>
                        <option value="announcement">announcement</option>
                        <option value="uploadSound">Use Custom Sound</option>
                    </select>
                    <button type="button" onclick="playSound()">Test</button>
                    <button type="button" onclick="pauseSound()">Stop</button>
                    <input
                        type="range"
                        class="rangeValue"
                        id="rangeValue"
                        min="0"
                        max="100"
                        oninput={changeAudioLevel}
                    />
                    <input
                        type="number"
                        id="soundValue"
                        min="0"
                        max="100"
                        value="50"
                        oninput={changeAudioLevel}
                        autocomplete="off"
                        title="Volume"
                    />
                </form>
            </div>
            <div>
                <form class="uploadForm" action="">
                    <label for="customInput">Upload your own sound: </label>
                    <input type="file" id="inputFile" accept="audio/mp3" />
                </form>
            </div>
            <script src="clockScript.js"></script>
        </div>

    );
}

export default Audiobox;