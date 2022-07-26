function StartButton(props) {
    const {changeTimerOn} = props;
    
    return (
        <div class="secondary">
            <form action="" class="settings">
                <label for="startTime">Starting Time:</label>
                <input
                    type="text"
                    id="startTimeBox"
                    name="startTime"
                    placeholder="HH:MM:SS or seconds"
                    class="textbox"
                    autofill
                    autocomplete="off"
                    title="Enter time in seconds or HH:MM:SS up to 86399 seconds or 23:59:59"
                />
                <label for="loop" class="loop">Loop:</label>
                <input type="checkbox" id="loop" name="loop" onclick="showLoops()" />
                <label for="loops" id="loops"># of loops:</label>
                <input
                    type="text"
                    id="loopbox"
                    name="loops"
                    autocomplete="off"
                    class="textbox"
                    title="Leave blank to loop indefinitely"
                    placeholder="&infin;"
                />
                <div>
                    <button type="button" onclick="buttonSet()">Set / Reset</button>
                    <button id="1" type="button" onclick="startStop()">Start</button>
                </div>
            </form>
        </div>
    );

}

export default StartButton;