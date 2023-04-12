

const workshop = [
  {
    id:1,
    image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681233202/nft_workshop.jpg",
    title: "NFT CREATION WORKSHOP - The Future of Digital Ownership",
    detail: "The goal of this session was to provide the students with a foundational understanding of blockchain technology and the decentralized technology world, as well as hands-on experience building NFTs on the Polygon network and putting their data on IPFS. The workshop covered the Polygon network, its characteristics, and how to deploy a smart contract to it in addition to smart contracts, their structure, and the many components that make up a smart contract. Solidity fundamentals were discussed to give insight into the development of smart contracts. Together, the participants created a smart contract for an NFT, defining its attributes and functions, deployed it to the Polygon network, making it live andf ready to be used, Followed by learning the process of minting an NFT. The attendees learned about IPFS, its features, and how to host metadata so that it is easily accessible and retrievable by anyone who needs it.",
    mentors: "Abhishek Kumar , Shubham Jaswal"
  }
  ,
  { 
    id:1,
    image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681233292/bug-hunting_workshop.jpg",
    title: "Hacking Billion Dollar Companies-A BUG HUNTING WORKSHOP",
    detail: "Through this workshop, participants acquired the fundamentals of security vulnerabilities, with a focus on web-specific flaws, and got hands-on practice detecting bugs on real platforms.The information-gathering phase of ethical hacking, which can span anything from network infrastructure to employee contact information, was explained to the participants. Reconnaissance was to locate as many potential assault vectors as was practical.The program covered systematically examining security flaws in an information system, determining whether it is susceptible to any known vulnerabilities, classifying those vulnerabilities according to severity, and recommending corrections if needed.Participants learned how to use an application's static and dynamic properties to identify malware and benign applications.The fundamentals of smart contract security were described.In order for their findings to be correctly addressed, information was provided on how to submit the bugs with the correct documentation and proof of concept.",
    mentors: "Anurag Verma , Shubham Jaswal"
  }
];


const handler = (req, res) => {
  res.status(200).json(workshop);
};

export default handler;