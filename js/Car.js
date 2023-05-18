function Car(containerId) {
    this._engine = new Engine();
    this._gearBox = new GearBox();

    this._render(containerId);
}

Car.prototype = {
    // interface
    start: function() {

        let randomNumber = Math.random();

        if (randomNumber > 0.5) {
            this._carStarted();
        } else {
            this._carCannotBeStarted()
        }
    },

    // private methods
    _carStarted: function() {
        console.log('ok');
    },

    _carCannotBeStarted: function() {
        console.log('ko')
    },
    _render: function(containerId) {
        let container = document.getElementById(containerId);
        container.innerHTML = `
        <div class='car'>
            <div class='info-panel'>
                <label>Status: </label> <span data-role='status'>Off</span>
            </div>
            <div class='controls'>
                <input data-role='start-car' type='button' value='Start'>
                <hr>
                <label>Gear box: </label> <span data-role='gear-box-value'>N</span>
            </div>
        </div>
        `;
    }
};