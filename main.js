const theData = {
  results: [
    {
      gender: "male",
      name: { title: "mr", first: "hakan", last: "schwarz" },
      location: {
        street: "buchenweg 29",
        city: "kaufbeuren",
        state: "schleswig-holstein",
        postcode: 10826,
        coordinates: { latitude: "-47.3816", longitude: "-52.9640" },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      email: "hakan.schwarz@example.com",
      login: {
        uuid: "5c8326e0-f0a5-4fdd-b277-e3d38b92eb45",
        username: "heavyladybug907",
        password: "bordeaux",
        salt: "9cOw7ZYU",
        md5: "60e429215017343f744fd99381776064",
        sha1: "1c7295729d731e6d50a71a4b53fe55b96dc5540e",
        sha256:
          "c109a83d0eab296a619cf80b4198a616dfdaf790af9eb16964fc05ebb77c0d8b"
      },
      dob: { date: "1955-01-29T02:40:40Z", age: 42 },
      registered: { date: "2015-09-03T20:52:13Z", age: 3 },
      phone: "0575-1973372",
      cell: "0177-0738230",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg"
      },
      nat: "DE"
    }
  ],
  info: { seed: "862ff565dc999fee", results: 1, page: 1, version: "1.2" }
};
// chunks first part of theData
const $results = theData.results[0];
// links image to html
const $image = document.getElementById("image");
$image.src = theData.results[0].picture.medium;
// links name to html
const $name = document.getElementById("name");
$name.innerText = $results.name.first + " " + $results.name.last;
// links username to html
const $userName = document.getElementById("userName");
$userName.innerText = theData.results[0].login.username;
// links Email to html
const $email = document.getElementById("email");
$email.innerText = theData.results[0].email;
// links number to html
const $number = document.getElementById("number");
$number.innerText = theData.results[0].phone;
// links age to html
const $age = document.getElementById("age");
$age.innerText = theData.results[0].dob.age;
