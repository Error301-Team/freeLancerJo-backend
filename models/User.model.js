"use strict";
const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: String,
    rating: String,
    img: String,
    email: String,
    phoneNumber: String,
    skills: Array,
    experience: String,
    job_describtion: String,
    price: String,
    location: String,
    lauguages:Array,
    Education:Object,
});
let MenNameArray = ['James', 'Robert', 'John' , 'William', 'Joseph', 'Mohmmad',  'Kevin', 'Brian', 'Tyler', 'Kyle','Anas','Joe','Hareem','Adam','Ahmad'];
let WomanNameArray=['Michael','Sarah', 'Kelly','Kelise','Sade','Lily','Rose','Amal','Arwa'];
let ratingArray = ['0', '1', '2', '3', '4', '5'];
let emailArray = ['4driss.cocok@freeallapp.com', 'ojeff.diniz6@roidirt.com', 'qrbk@gamakang.com'
    , '9thomas.pinto.502@ermtia.com', 'dset.bamarnyy@nhtlaih.com', 'cshubhamhappysin6@gmailni.com'
    , 'dm.fr@halumail.com', '4mntop10n@bachelors.ml', 'vmedoman941e@tango-card.com'
    , 'wsoulaimane.ni@antawii.com', '9annass_bchinah@mobilk.site', 'urobert.soares@boomito.com'
    , 'mali.c.ronaldo7l@mailpluss.com'];
let phonoeNumberArray = ['(868) 305-9443', '(943) 275-3806', '(735) 355-1728', '(935) 516-9885',
    '(440) 433-3902', '(669) 570-2863', '(589) 679-9648', '(528) 324-9432', '(391) 203-3233',
    '(344) 622-4890', '(367) 402-0274', '(806) 912-3810', '(218) 218-9186', '(945) 231-1570',
    '(962) 764-8569', '(962) 765-6869', '(962) 224-8423'];
let skillsArray = ['Positive attitude', 'Communication', 'Teamwork', 'Self-management', 'Willingness to learn', 'Thinking skills (problem solving and decision making)',
    'Resilience', 'Organisation', 'Perseverance', 'Ability to work under pressure', 'Leadership', 'Critical Thinking',
    'Logical Thinking'];
let xpArray = ['training', 'Entry-level', 'Low Intermediate', 'Intermediate', 'Mid-level', 'executive-level'];
let job_describtionArray = ['Financial Manager', 'Operations Supervisor', 'Web Programmer', 'Back-end Developer',
    'Database Administrator', 'Game Developer', 'Architect', 'Architect', 'Architect', 'UI/UX Designer',
    'Graphic Designer', 'Illustrator job', 'Visual Designer', 'Photographer', 'Photo Editor', 'Journalist','Gamer'
,'Gamer','Gamer','Gamer','Gamer'];
let priceArray = ['20', '25', '30', '40', '50', '70', '100', '120', '250', '280', '90', '13', '17']
let locationArray = ['Amman', 'Salt', 'Jerash', 'Zarqa', 'Irbid', 'Kerak', 'At-Tafilah',
    'Nashville, TN', 'Kingston', 'Athens', 'Bangkok', 'Bogotá', 'Valletta', 'Pyongyang', 'Riga', 'paris', 'Copenhagen', 'Tunis']

let menImgArr=['https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369',
'https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369',
'https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369',
"http://myseedhospitality.com/wp-content/uploads/2018/01/passport-size-photo-male-233x300.jpg",
'https://i.pinimg.com/originals/08/2e/f2/082ef21074e864321406207b3b5df81e.jpg',
"https://mirchevphotography.b-cdn.net/wp-content/uploads/2014/04/Corporate-headshot-1.jpg",
"https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1573846603518-AWQN70YBUJMDY5BGK0Q3/physician+headshot.jpg?format=1000w",
"https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/profssional-portrait.jpg",
'https://www.christopherjungo.com/uploads/2/4/9/4/24948269/screen-shot-2018-02-10-at-00-09-32_orig.png',
'https://www.headshotsprague.com/wp-content/uploads/2019/07/Headshots_Prague-emotional-portrait-of-a-smiling-entrepreneur-1.jpg',
'https://usys.ethz.ch/en/people/profile.person_image.jpeg?persid=MjQzNjY5',
'https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369',
'https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369',
]
let womanImgArr=["https://thejacquereidexperience.com/images/822370.jpg",
'https://www.nicepng.com/png/full/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
'https://www.nicepng.com/png/full/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
'https://www.nicepng.com/png/full/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
'https://www.nicepng.com/png/full/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
"http://myseedhospitality.com/wp-content/uploads/2018/01/passport-size-photo-female-233x300.jpg",
'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
'https://allmyfriendsarejpegs.com/wp-content/uploads/2018/02/dsc074972.jpg',
'https://images.iphonephotographyschool.com/24755/portrait-photography.jpg',
'https://i.pinimg.com/originals/db/c2/3a/dbc23aa0d94e95eac90f5eca466b26a9.jpg',
'https://www.nicepng.com/png/full/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
]
let eduArray = [{School:"AlBalqa Applied University",AreaOfStudys:"software engineering",Degree:"Diploma",From:"2016",To:"2020"},
{School:"Yarmouk university",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2014",To:"2018"},
{School:"Philadelphia university",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2016",To:"2021"},
{School:"Jordan university",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2014",To:"2018"},
{School:"ltuc college",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2011",To:"2015"},
{School:"Davidson College",AreaOfStudys:"Graphic Designer",Degree:"Diploma",From:"2010",To:"2015"},
{School:"United States Air Force Academy",AreaOfStudys:"Graphic Designer",Degree:"Diploma",From:"2013",To:"2017"},
{School:"Brown University",AreaOfStudys:"Graphic Designer",Degree:"Diploma",From:"2009",To:"20015"},
{School:"Case Western Reserve University",AreaOfStudys:"Graphic Designer",Degree:"Diploma",From:"2001",To:"2005"},
{School:"Colgate University",AreaOfStudys:"photographer",Degree:"computer science",From:"2020",To:""},
{School:"Amherst College",AreaOfStudys:"computer science",Degree:"Diploma",From:"2015",To:"2020"},
{School:"Rice University",AreaOfStudys:"computer science",Degree:"Diploma",From:"2014",To:"2018"},
{School:"University of Rochester",AreaOfStudys:"computer science",Degree:"Diploma",From:"2012",To:"2016"},
{School:"University of Texas",AreaOfStudys:"photographer",Degree:"Diploma",From:"2003",To:"2007"},
{School:"Florida State University",AreaOfStudys:"photographer",Degree:"Diploma",From:"2008",To:"2013"},
{School:"University of California",AreaOfStudys:"photographer",Degree:"Diploma",From:"2000",To:"2005"},
{School:"University of Dayton",AreaOfStudys:"software engineering",Degree:"Diploma",From:"2006",To:"2009"},
{School:"University of Potsdam",AreaOfStudys:"software engineering",Degree:"Diploma",From:"2010",To:"2013"},
{School:"University of Münster",AreaOfStudys:"software engineering",Degree:"Diploma",From:"2015",To:"2020"},
{School:"University of Bonn",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2015",To:"2019"},
{School:"Cairo University",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2015",To:"2018"},
{School:"University of Hohenheim",AreaOfStudys:"Architecture",Degree:"Diploma",From:"2015",To:"2021"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2016",To:"2018"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2018",To:"2020"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2012",To:"2015"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2013",To:"2015"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2016",To:"2018"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2014",To:"2016"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2013",To:"2016"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2014",To:"2017"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2012",To:"2015"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2013",To:"2015"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2019",To:"2021"},
{School:"",AreaOfStudys:"",Degree:"High School",From:"2018",To:"2020"},
{School:"King’s College London",AreaOfStudys:"Architecture",Degree:"master's ",From:"2018",To:"2020"},
{School:"UCL",AreaOfStudys:"computer science",Degree:"master's",From:"2019",To:"2021"},
{School:"Tottori University",AreaOfStudys:"computer science",Degree:"master's",From:"2013",To:"2016"},
{School:"University of Tokyo",AreaOfStudys:"software engineering",Degree:"master's",From:"2018",To:"2020"},
{School:"ITMO University",AreaOfStudys:"software engineering",Degree:"master's",From:"2014",To:"2016"},
{School:"Novosibirsk State University",AreaOfStudys:"photographer",Degree:"master's",From:"2016",To:"2018"},
{School:"Higher School of Economics",AreaOfStudys:"photographer",Degree:"master's",From:"2016",To:"2018"},
{School:"Lomonosov Moscow State University",AreaOfStudys:"Graphic Designer",Degree:"Doctorate",From:"2003",To:"2007"},
{School:"Lomonosov Moscow State University",AreaOfStudys:"Graphic Designer",Degree:"Doctorate",From:"2015",To:"2020"},
{School:"Harvard University",AreaOfStudys:"Architecture",Degree:"Doctorate",From:"2006",To:"2009"},
{School:"Harvard University",AreaOfStudys:"Architecture",Degree:"Doctorate",From:"2015",To:"2019"},
{School:"Lomonosov Moscow State University",AreaOfStudys:"Architecture",Degree:"Doctorate",From:"2012",To:"2016"},
{School:"Harvard University",AreaOfStudys:"Architecture",Degree:"Doctorate",From:"2016",To:"2020"},
]
let lauguagesArray=["English","English","English","English","English","English","English","English","Arabic","Arabic","Arabic",
"Spanish","Spanish","Italian","Russian","Chinese","Greek","Portuguese","Portuguese","Hindi","Hindi"]

const userModel = mongoose.model('User', User);

let getRandom =(max,min)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
let seedUser = () => {
    for (let i = 0; i < 30; i++) {
        let lauguagesArr=[];
        let firstLauguage=lauguagesArray[getRandom(lauguagesArray.length-1,0)];
        let secendLauguage=lauguagesArray[getRandom(lauguagesArray.length-1,0)];
        firstLauguage!==secendLauguage?lauguagesArr=[firstLauguage,secendLauguage]:lauguagesArr[firstLauguage];
        if(i%2===0){
            let newUser = new userModel({
                name: MenNameArray[getRandom(MenNameArray.length-1,0)]+" "+MenNameArray[getRandom(MenNameArray.length-1,0)],
                rating: ratingArray[getRandom(ratingArray.length-1,0)],
                img: menImgArr[getRandom(menImgArr.length-1,0)],
                email: emailArray[getRandom(emailArray.length-1,0)],
                phoneNumber: phonoeNumberArray[getRandom(phonoeNumberArray.length-1,0)],
                skills: [skillsArray[getRandom(skillsArray.length-1,0)],skillsArray[getRandom(skillsArray.length-1,0)],skillsArray[getRandom(skillsArray.length-1,0)]],
                experience: xpArray[getRandom(xpArray.length-1,0)],
                job_describtion: job_describtionArray[getRandom(job_describtionArray.length-1,0)],
                price: priceArray[getRandom(priceArray.length-1,0)],
                location: locationArray[getRandom(locationArray.length-1,0)],
                lauguages:lauguagesArr,
                Education: eduArray[getRandom(eduArray.length-1,0)],
            });
            newUser.save();
        }else{
            let newUser = new userModel({
                name: WomanNameArray[getRandom(WomanNameArray.length-1,0)]+" "+MenNameArray[getRandom(MenNameArray.length-1,0)],
                rating: ratingArray[getRandom(ratingArray.length-1,0)],
                img: womanImgArr[getRandom(womanImgArr.length-1,0)],
                email: emailArray[getRandom(emailArray.length-1,0)],
                phoneNumber: phonoeNumberArray[getRandom(phonoeNumberArray.length-1,0)],
                skills: [skillsArray[getRandom(skillsArray.length-1,0)],skillsArray[getRandom(skillsArray.length-1,0)],skillsArray[getRandom(skillsArray.length-1,0)]],
                experience: xpArray[getRandom(xpArray.length-1,0)],
                job_describtion: job_describtionArray[getRandom(job_describtionArray.length-1,0)],
                price: priceArray[getRandom(priceArray.length-1,0)],
                location: locationArray[getRandom(locationArray.length-1,0)],
                lauguages:lauguagesArr,
                Education: eduArray[getRandom(eduArray.length-1,0)],
            });
            newUser.save();
        }
    }

}
module.exports = { seedUser, userModel, User }