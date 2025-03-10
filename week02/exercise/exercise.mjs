import dayjs from 'dayjs';

function Answer(text, username, date, score=0) {
    this.text = text;
    this.username = username;
    this.score = score;
    this.date = dayjs(date);

    this.toString = () => {
        return `\n"${this.text}" by ${this.username} on ${this.date.format('YYYY-MM-DD')} with ${this.score} votes`;
    }
}

function Question(text, username, date) {
    this.text = text;
    this.username = username;
    this.date = dayjs(date);
    this.answers = [];

    this.add = (answer) => {
        this.answers.push(answer);
    }

    this.find = (username) => {
        /* const foundAnswers = [];
        for(const ans of this.answers) {
            if (ans.username === username) {
                foundAnswers.push(ans);
            }
        }
        return foundAnswers; */

        return this.answers.filter(ans => ans.username === username);
    }

    this.afterDate = (date) => {
        return [...this.answers].filter(ans => ans.date.isAfter(dayjs(date)));
    }

    this.listByDate = () => {
        return [...this.answers].sort((a, b) => a.date.isAfter(b.date) ? 1 : -1);
    }

    this.listByScore = () => {
        return [...this.answers].sort((a, b) => b.score - a.score);
    }
}

const question = new Question ('Is JavaScript better than Python?', 'johndoe', '2025-02-28');

const answer1 = new Answer('Yes, it is', 'janedoe', '2025-02-28');
const answer2 = new Answer('No, it is not', 'pippodoe', '2025-03-01', -10);
const answer3 = new Answer('Not in a million year', 'xldymyry', '2025-03-02', 5);
const answer4 = new Answer('knee surgery', 'mitbit1337', '2025-03-02', 20);

question.add(answer1);
question.add(answer2);
question.add(answer3);
question.add(answer4);

const answersbyjohndoe = question.find('janedoe');
console.log(question);
console.log("\nAnswers by johndoe: " + answersbyjohndoe);

console.log("\nAnswers after 2025-03-01:" + question.afterDate('2025-03-01'));
console.log("\nAnswers by date:" + question.listByDate());
console.log("\nAnswers by score:" + question.listByScore());
