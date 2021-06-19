// the arrays for the quotes and person

const arrays = {
    'quote' : ['"Survival is winning, Franklin, everything else is bullshit. Fairy tales spun by people too afraid to look life in the eye. Whatever it takes kid: survive."', '"Security is mostly a superstition. Life is either a daring adventure or nothing."', '"Don\'t let yesturday take up too much of today."', '"We may encounter many defeats but we must not be defeated."'],
    'author' : ['Will Rogers', 'Maya Angelou', 'Helen Keller', 'Unkown'],
    'day' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};


const random = {

    'randomQuote' : Math.floor(Math.random() * arrays['quote'].length),
    'randomAuthor' : Math.floor(Math.random() * arrays['author'].length),
    'randomDay' : Math.floor(Math.random() * arrays['day'].length)

};

let quote;
let author;
let day;

// in this switch operation, if the quote is not given, replace arrays['quote'][x] with string
switch(random['randomQuote']){

    case 0:
        quote = arrays['quote'][0];
        break;
    case 1:
        quote = arrays['quote'][1];
        break;
    case 2:
        quote = arrays['quote'][2];
        break;
    case 3:
        quote = arrays['quote'][3];
        break;

};

switch(random['randomAuthor']){

    case 0:
        author = 'Will Rogers';
        break;
    case 1:
        author = 'Maya Angelou';
        break;
    case 2:
        author = 'Helen Keller';
        break;
    case 3:
        author = 'Unkown';
        break;

};

switch(random['randomDay']){

    case 0:
        day = arrays['day'][0];
        break;
    case 1:
        day = arrays['day'][1];
        break;
    case 2: 
        day = arrays['day'][2];
        break;
    case 3: 
        day = arrays['day'][3];
        break;
    case 4:
        day = arrays['day'][4];
        break;
    case 5:
        day = arrays['day'][5];
        break;
    case 6:
        day = arrays['day'][6];
        break;
};

 
function randomMsg() {
    // change this to a return command
    return (`Your ${day} motivational quote is; ${quote} -${author}`)

};


