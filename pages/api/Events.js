const data = [
    {
        id: 1,
        title: "EXEplore",
        image: "https://res.cloudinary.com/dldoqjanc/image/upload/v1617720339/exeplore_hbmre1.jpg",
        text: "\u201cGames have so much freedom. you can go anywhere you want.\u201d Whether you are a gaming champ or just want to take a break and do something fun, EXEplore is the perfect choice for you! EXEplore consists of many fun games, designed and developed by our team. Relative scoring of each game is done and the one with the highest score wins. It is hosted online so you can enjoy it straight from your laptop, at your ease. Amid the dreary COVID situations, this is something we all need to enjoy!!",
    },
    {
        id: 2,
        title: "CryptoQuiz",
        image: "https://i.imgur.com/3jNimDO.jpg",
        text: "Get ready for a mathematical roller coaster ride as Team .Exe brings to you Crytoquiz, an online event  to test both  your speed and accuracy. There's something more, the quiz is  hosted on a decentralised website and only the quickest submission will make its place on the CryptoBoard. So tighten up your belts, and race your brain for the solution hunt!",
    },
    {
        id: 3,
        title: "CAPTURE THE FLAG",
        image: "https://res.cloudinary.com/dldoqjanc/image/upload/v1617720591/b2c18f23-eb8f-45f8-a493-a12caa7a8c74_q3x5uq.jpg",
        text: "CTF is going to be an online Cyber Security Event. The event aims at bolstering the Cybersecurity culture among the college students. The basic motive of this event is to introduce the enthusiasts to the different areas of Cybersecurity and to encourage them to participate in CTFs happening in different parts of India and worldwide.",
    },
    {
        id: 4,
        title: "PARADOX",
        image: "https://res.cloudinary.com/dldoqjanc/image/upload/v1617720800/paradox_dtu88z.jpg",
        text: "Paradox is a globally acclaimed event that is organized before as well as during NIMBUS by Team.EXE the departmental team of Computer Science and Engineering of NIT Hamirpur. It is an online level based game where the participant looks for a word that is signified by an image/set of images. Hints are provided periodically to help with the process of thinking in the right direction. It has received more than 20,000 downloads from all over the world with 5000 downloads from US and UK.",
    },
    {
        id: 5,
        title: "Trade and Code",
        image: "https://res.cloudinary.com/dldoqjanc/image/upload/v1617720710/Trade_Code_ojw5du.png",
        text: "Trade and Code brings a fun amalgamation of economics and coding. It is an event based on real-time trading and problem solving while managing your balance. Each team will be provided with a certain amount of virtual currency, and they have to buy various components and libraries required to write a code (eg: loops, if-else statements, string library, classes, etc). The best coders and traders win exciting prizes!",
    },
    {
        id: 6,
        title: "Game of Codes",
        image: "https://res.cloudinary.com/dldoqjanc/image/upload/v1617720860/goc_rnxsb4.jpg",
        text: "Game Of Codes is an online competitive programming contest. This event consists of interesting coding problems which coders love to solve. It\u2019s a short coding contest of two and a half hours. Students from NITH, as well as from other institutions, are welcome to participate and win amazing prizes!!",
    },
];

const hello = (req, res) => {
    res.status(200).json(data);
};

export default hello;
