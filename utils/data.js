const names=[
    'CoolGuy69',
    'Tester123',
    'I_Like_Turtles',
    'AdventureLover',
    'RadicalLarry91',
    'OzobtheClown',
    'Runninginthe90s',
    'MSNuser',
    'XxNotDatedAtAllxX',
    'loner381',
    'sam',
    'bikefan0001',
    'FBIOpenUp',
    '__Jo__',
    'Strabisbeo',
    'AlbertWesker442',
    'EmpireDidNothingWrong',
    'startrekfan61',
    'mickey-mouse',
    'WhereisShe',
    'I_am_your_father',
    'DenverLocal303',
    'DOORSTUCK',
    'notafakeaccount',
    'Melon_Tusk',
];

const emails=[
    'duckduck@mail.mail',
    'test@test.com',
    'hotmail@hotmail.com',
    'google@youtube.org',
    'starwars@startrek.com',
    'tester134@mail.com',
    'Scrooge@duck.com',
    'deus@ex.com',
    'Halflife3@valve.com',
    'resident@evil.com',
    'arrow@knee.org',
    'bongo@cat.com',
    'trombonechamp@osu.com',
    'truefan123@real.com',
    'washedup@beach.gov',
    'ratherbenot@here.com',
    'coffeelover512@starbucks.com',
    'getarealjob@gaming.com',
    'Elsa13412@snowing.com',
    'jojo@bizzare.com',
];

const thoughts=[
    `I'm a cat lover, but dogs are great too`,
    'Decision Trackers are awesome',
    'Find My Phone is a useful app',
    'Learn Piano is not very good for learning Piano',
    'Starbase Defender is a great game, I love it',
    'Tower Defense is okay',
    'Monopoly Money is better than real money IMO',
    'Movie trailers are just the best parts of a movie distilled into 90 seconds',
    'Hello world, this is a comment',
    'Social media is a big waste of time',
    'Notes is my most used app',
    'Messages is open on my computer 24/7',
    'Email is open on my computer',
    'Compass is never opened',
    'Firefox is great for privacy',
    `What's the deal with trains`,
    'This site is pretty awesome',
];



const getRandomArrItem=(arr)=>arr[Math.floor(Math.random()*arr.length)];

const getRandomUsername=()=>`${getRandomArrItem(names)}${Math.floor(Math.random()*10)}`;

const getRandomEmail=()=>`${getRandomArrItem(emails)}${Math.floor(Math.random()*10)}`;

const getRandomThoughts=()=>`${getRandomArrItem(thoughts)}${Math.floor(Math.random()*10)}`;

module.exports={getRandomArrItem,getRandomUsername,getRandomEmail,getRandomThoughts};