const question = document.getElementById("question");
const answer = document.getElementById("answer");

let init = 0;

const botSay = (data) => {
    return [
        "Hi i'm Relbot, what's your name?",
        `Hi ${data?.name}, how old are you?`,
        `Your age is ${data?.old}, what is your hobby?`,
        `Your hobby is ${data?.hobby}, do you have a girlfriend?`,
        `Your girlfriend is ${data?.girlfriend}, do you want end?`
    ]
}

question.innerHTML = botSay()[0];

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ name: answer.value })
    } else if (init === 2) {
        botDelay({ old: answer.value })
    } else if (init === 3) {
        botDelay({ hobby: answer.value })
    } else if (init === 4) {
        botDelay({ girlfriend: answer.value })
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    };

function botDelay(answerUser) {
    setTimeout(() => {
        question.innerHTML = botSay(answerUser)[init]
    }, 1200);
    usersData.push(answerUser);
    answer.value = "";
}

function finishing() {
    question.innerHTML = `Thank you ${usersData[0].name} for answering my questions!, ${usersData[2].hobby} is a great hobby!`;
    answer.value = "thank you!";
}

function botEnd() {
    window.location.reload();
}
}