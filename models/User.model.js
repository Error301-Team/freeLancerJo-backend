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

const userModel = mongoose.model('User', User);

let getRandom =(max,min)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
let seedUser = () => {
    for (let i = 0; i < 30; i++) {
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
            });
            console.log(newUser);
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
                
            });
            console.log(newUser);
            newUser.save();
        }
    }

}
module.exports = { seedUser, userModel, User }