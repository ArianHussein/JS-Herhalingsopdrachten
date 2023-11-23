//Opdracht 1A
const person = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com" 
}
`;

const objPerson = JSON.parse(person);
console.log("Firstname is: ", objPerson.firstname);
console.log("Email is: ", objPerson.email);

//Opdracht 1B

const person1 = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}
`;

const objPerson1 = JSON.parse(person1);
console.log("ID is: ", objPerson1.id);
console.log("Firstname is: ", objPerson1.firstname);
console.log("Lastname is: ", objPerson1.lastname);

//Opdracht 2

const text = `
{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
}
`;

const objtext = JSON.parse(text)
console.log("Title is: ", objtext.title);
console.log("Content is: ", objtext.content);
console.log("PublishedAt is: ", objtext.publishedAt);

//Opdracht 3
const text1 = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }

`;

const objtext1 = JSON.parse(text1)
console.log("Email is: ", objtext1.email);
console.log("Username is: ", objtext1.login.username);
console.log("City is: ", objtext1.address.city);
console.log("Company is: ", objtext1.company.name);

//Opdracht 4

const text2 = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }
  `;

const objtext2 = JSON.parse(text2)
console.log("ID is: ", objtext2.id);
console.log("PostID is: ", objtext2.postId);
console.log("UserID is: ", objtext2.userId);
console.log("Comment  is: ", objtext2.comment);

//Opdracht 5

const text3 = `
[
    {
      "id": 1,
      "postId": 1,
      "userId": 1,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "id": 2,
      "postId": 1,
      "userId": 1,
      "comment": "Nulla quis libero vel orci rutrum suscipit."
    },
    {
      "id": 3,
      "postId": 3,
      "userId": 2,
      "comment": "Cras ac elit sit amet mi placerat bibendum."
    }
  ]
  `;

const objtext3 = JSON.parse(text3);

for (var i = 0; i < objtext3.length; i++) {
  console.log(objtext3[i].comment);
}

//Opdracht 6


const text4 = '[{"albumId":1,"id":1,"title":"accusamus beatae ad facilis cum similique qui sunt","url":"https://via.placeholder.com/600/92c952","thumbnailUrl":"https://via.placeholder.com/150/92c952"},{"albumId":1,"id":2,"title":"reprehenderit est deserunt velit ipsam","url":"https://via.placeholder.com/600/771796","thumbnailUrl":"https://via.placeholder.com/150/771796"},{"albumId":1,"id":3,"title":"officia porro iure quia iusto qui ipsa ut modi","url":"https://via.placeholder.com/600/24f355","thumbnailUrl":"https://via.placeholder.com/150/24f355"},{"albumId":1,"id":4,"title":"culpa odio esse rerum omnis laboriosam voluptate repudiandae","url":"https://via.placeholder.com/600/d32776","thumbnailUrl":"https://via.placeholder.com/150/d32776"},{"albumId":1,"id":5,"title":"natus nisi omnis corporis facere molestiae rerum in","url":"https://via.placeholder.com/600/f66b97","thumbnailUrl":"https://via.placeholder.com/150/f66b97"},{"albumId":1,"id":6,"title":"accusamus ea aliquid et amet sequi nemo","url":"https://via.placeholder.com/600/56a8c2","thumbnailUrl":"https://via.placeholder.com/150/56a8c2"}]';


const photoData = JSON.parse(text4);

let photoListHTML = '<ul>';


for (let i = 0; i < photoData.length; i++) {
  photoListHTML += `<li>${photoData[i].title} - ${photoData[i].url}</li>`;
}


photoListHTML += '</ul>';

document.body.innerHTML = photoListHTML;

//Opdracht 7

const student = {
  name: 'John',
  age: 20,
  marks: {
    science: 70,
    math: 75
  }
};


const text5 = JSON.stringify(student);
console.log(text5);

//Opdracht 8

// Het gegeven JavaScript-array van objecten
const students = [
  {
    name: 'Wolverine',
    age: 38,
    marks: {
      science: 20,
      math: 15
    }
  },
  {
    name: 'Xavier',
    age: 64,
    marks: {
      science: 95,
      math: 90
    }
  },
  {
    name: 'Magneto',
    age: 68,
    marks: {
      science: 90,
      math: 85
    }
  }
];


const text6 = JSON.stringify(students);
console.log(text6);





