const question = document.getElementById("question");
const answer = document.getElementById("answer");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container")[0];

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
    if (answer.value === "") {
        return alert("Please enter your answer!");
    }

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
    loaders.style.display = "block";
    container.style.filter = "blur(5px)";
    
    setTimeout(() => {
        loaders.style.display = "none";
        container.style.filter = "none";
        question.innerHTML = botSay(answerUser)[init]
    }, 1200);

    question.innerHTML = "Loading...";
    answer.value = "";

    usersData.push(answerUser);
}

function finishing() {
    question.innerHTML = `Thank you ${usersData[0].name} for answering my questions!, ${usersData[2].hobby} is a great hobby!`;
    answer.value = "thank you!";
}

function botEnd() {
    alert(`${usersData[0].name} you will be redirected to the main page!`);
    window.location.reload();
}
}