function reply(body, response){
    var replydata = {
        type: "raw",
        body: body
    };
    response.replies = response.replies || [];
    response.replies.push(replydata);
};

function addAction(action, context){
    var command = {
        type: "smart_app_data",
        action: action
    };
    var response = {items: [{command: command}]};
    reply(response, context.response);
}

function switchModeOn(context){
    addAction({
        type: "timerUp",
    }, context);
}

function switchModeOff(context){
    addAction({
        type: "timerDown",
    }, context);
}

function openSettings(context){
    addAction({
        type: "openSettings",
    }, context);
}

function closeSettings(context){
    addAction({
        type: "closeSettings",
    }, context);
}

function setSessionTime(minutes, context){
    addAction({
        type: "setSessionTime",
        minutes: minutes
    }, context);
}

function setBreakTime(minutes, context){
    addAction({
        type: "setBreakTime",
        minutes: minutes
    }, context);
}