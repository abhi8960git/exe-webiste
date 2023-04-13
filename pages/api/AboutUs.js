const AboutUs = [
    {
        id:1,
        image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681289633/IMG_5472_j6ypvy.jpg",
        title:"TEAM .EXE",
        description:"A group of tech aficionados coming up together to chase excellence.Teaming up to exhibit various projects and events for the tech fest NIMBUS."
    }
    ,
    {
        id:2,
        image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681289726/WhatsApp_Image_2023-04-12_at_2.24.50_PM_zsmci8.jpg",
        title:"WORK CULTURE",
        description:"Possessing one of the best cultures for fostering the requirements of every tech guy and bringing them together to realize their potential and make things work."
    }
    ,
    {
        id:3,
        image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681306801/IMG_5468_kk5kip.jpg",
        title:"OUR METHODOLOGY",
        description:"We respect each and every person’s expertise and come up together to make the best possible use of everyone’s expertise to build various projects."
    }
    ,
    {
        image:"https://res.cloudinary.com/dcln4oee5/image/upload/v1681289537/DSC_0035_2_-01_lg7poq.jpg",
        title:"DEDICATED TO EXCELLENCE",
        description:"We seek to perform at our highest level in the face of all adversity and to triumph over it in order to accomplish our goals."
    },
    {
        id:4,
        image:"https://res.cloudinary.com/dzf90zswv/image/upload/v1681307531/WhatsApp_Image_2023-04-12_at_19.19.51_zpkqvs.jpg",
        title:"OUR CONTRIBUTIONS",
        description:"We strive to play the best possible role in promoting the Tech culture at our institute, whether through seminars, events, or guest lectures, we generate a variety of ideas and assist students."
    }
    
   
     
    
     
];


const handler = (req, res) => {
    res.status(200).json(AboutUs);
  };
  
  export default handler;





