const data = [
    {
        image: "",
        title: "Trade and Code ",
        mentor: "Mrigank Anand and Anant Verma",
        detail: "Trade and Code brings a fun amalgamation of economics and coding. It is an event based on real-time trading and problem solving while managing your balance. Each team will be provided with a certain amount of virtual currency, and they have to buy various components and libraries required to write a code (eg: loops, if-else statements, string library, classes, etc). The best coders and traders win exciting prizes!",
    },
    {
        image: "",
        title: "Kuch bhi",
        mentor: "Abhishek",
        detail: "Kuch bhi bna rha hun",
    },
];

const hello = (req, res) => {
    res.status(200).json(data);
};

export default hello;
