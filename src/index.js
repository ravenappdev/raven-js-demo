import _ from 'lodash'
import './raven/index.js'
import { initialize, setupPushNotification } from './raven/index.js';

function component() {

    //Load Raven
    initialize()

    var button = document.createElement("button");
    button.innerHTML = "Get Token";

    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    // 3. Add event handler
    button.addEventListener("click", function () {
        setupPushNotification();
    });

    return body;
}

document.body.appendChild(component());