/*
    CIT 281 Project 4
    Name: Nakisha Lin 
*/

/*****************************
  Module function testing
******************************/
const p4Data = require('./p4-data.js');

function getQuestions() {
    return p4Data.data.map(e => e.question);
}
console.log(getQuestions());

function getAnswers() {
    return p4Data.data.map(e => e.answer);
}
console.log(getAnswers());

function getQuestionsAnswers() {
    //let p2 = Object.assign({}, data);
    //return [JSON.parse(JSON.stringify(p4Data.data))]
    return [...p4Data.data.slice()];


}
console.log(getQuestionsAnswers());


function getQuestion(number = "") {
    let num = parseInt(number);
    if (number == '') {
        const questionNum = {
            error: 'Question number must be an integer',
            question: '',
            number: '',
        };
        return questionNum;
    } else if (num == 0) {
        const questionNum = {
            error: 'Question number must be >=1',
            question: '',
            number: ''
        };
        return questionNum;
    } else if (num > 3) {
        const questionNum = {
            question: 'Question number must be less than the number of question (3)',
            number: '',
            error: ''
        };
        return questionNum;
    } else {
        const questionNum = {
            question: getQuestions()[num - 1],
            number: num,
            error: '',
        };
        return questionNum;
    }
    //obj = {
    //  question: 'Q' + num,
    // number: num,
    //error: '',
    //}
    //return obj;
}
console.log(getQuestion());

function getAnswer(number = "") {
    let num = parseInt(number);
    //!Number.isInteger(number)
    if (number == '') {
        const questionNum = {
            error: 'Question number must be an integer',
            question: "",
            number: "",
        };
        return questionNum;
    } else if (num == 0) {
        const questionNum = {
            error: 'Question number must be >=1',
            question: '',
            number: ''
        };
        return questionNum;
    } else if (num > 3) {
        const questionNum = {
            question: 'Question number must be less than the number of question (3)',
            number: '',
            error: ''
        };
        return questionNum;
    } else {
        const questionNum = {
            question: getQuestions()[num - 1],
            number: num,
            error: '',
        };
        return questionNum
    }
    //obj = {
    //  question: 'Q' + num,
    // number: num,
    //error: '',
    //}
    //return obj;

}
console.log(getAnswer());


function getQuestionAnswer(number = "") {
    let num = parseInt(number);
    if (number == '') {
        const questionNum = {
            error: 'Question number must be an integer',
            question: '',
            number: '',
        };
        return questionNum;
    } else if (num == 0) {
        const questionNum = {
            error: 'Question number must be >=1',
            question: '',
            number: ''
        };
        return questionNum;
    } else if (num > 3) {
        const questionNum = {
            error: 'Question number must be less than the number of question (3)',
            number: '',
            question: ''
        };
        return questionNum;
    } else {
        const questionNum = {
            question: getQuestions()[num - 1],
            number: num,
            error: "",
        };
        return questionNum
    }
    //obj = {
    //  question: 'Q' + num,
    // number: num,
    //error: '',
    //}
    //return obj;
}


console.log(getQuestionAnswer());





function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
        console.log(`-> ${category}${o.d}:`);
        console.log(o.f);
    }
}


// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = true;
const testAdd = false; // Extra credit
const testUpdate = false; // Extra credit
const testDelete = false; // Extra credit



// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
    testing(
        "getQuestion", { d: "()", f: getQuestion() }, // Extra credit: +1
        { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
        { d: "(1)", f: getQuestion(1) }, { d: "(4)", f: getQuestion(4) } // Extra credit: +1
    );
}

// getAnswer()
if (testGetA) {
    testing(
        "getAnswer", { d: "()", f: getAnswer() }, // Extra credit: +1
        { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
        { d: "(1)", f: getAnswer(1) }, { d: "(4)", f: getAnswer(4) } // Extra credit: +1
    );
}

// getQuestionAnswer()
if (testGetQA) {
    testing(
        "getQuestionAnswer", { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
        { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
        { d: "(1)", f: getQuestionAnswer(1) }, { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
    );
}


// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
    testing(
        "getQuestion", { d: "()", f: getQuestion() }, // Extra credit: +1
        { d: "(0)", f: getQuestion(0) }, // Extra credit: +1
        { d: "(1)", f: getQuestion(1) }, { d: "(4)", f: getQuestion(4) } // Extra credit: +1
    );
}

// getAnswer()
if (testGetA) {
    testing(
        "getAnswer", { d: "()", f: getAnswer() }, // Extra credit: +1
        { d: "(0)", f: getAnswer(0) }, // Extra credit: +1
        { d: "(1)", f: getAnswer(1) }, { d: "(4)", f: getAnswer(4) } // Extra credit: +1
    );
}

// getQuestionAnswer()
if (testGetQA) {
    testing(
        "getQuestionAnswer", { d: "()", f: getQuestionAnswer() }, // Extra credit: +1
        { d: "(0)", f: getQuestionAnswer(0) }, // Extra credit: +1
        { d: "(1)", f: getQuestionAnswer(1) }, { d: "(4)", f: getQuestionAnswer(4) } // Extra credit: +1
    );
}





module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    //addQuestionAnswer
};