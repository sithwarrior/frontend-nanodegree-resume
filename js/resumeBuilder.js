var bio = {
  name: "Martin Bech",
  role: "Frontend Sith",
  "contacts": {
    "mobile": "555-555-555",
    "email": "dangerboy@sithlords.com",
    "github": "sithwarrior",
    "twitter": "@bechonline",
    "location": "Skanderborg"
  },
  "welcomeMessage": "Fullstack developer, jack of all trades",
  "skills": ["Sith", "jQuery", "Angular", "C#", "MSSQL"],
  "bioPic": "images/bio.jpg",
}

bio.display = function() {
  //Setting header/bio infoWindow
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.location).replace("%contact%", "location"));

  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.location).replace("%contact%", "location"));

  $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

  if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    var formattedSkills =  "";
    for (var i = 0; i < bio.skills.length; i++) {
      formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
    }
     $("#skills").append(formattedSkills);
  }
}

bio.display();

var work = {
  "jobs" : [
    {
      "employer" : "Sport Solution A/S",
      "title" : "Developer",
      "dates" : "2010 - Future",
      "location" : "Århus",
      "description" : "A great description"
    },
    {
      "employer" : "YouSee",
      "title" : "Supervisor",
      "dates" : "2001 - 2010",
      "location" : "Århus",
      "description" : "A great description"
    }
  ]
};


work.displayWork = function(){
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)

    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
  }
}

work.displayWork();

var education = {
  "schools" : [
    {
      "name" : "Handelsskolen i Randers",
      "location" : "Randers",
      "degree" : "HHX",
      "majors" : ["IT"],
      "dates" : "1997 - 2000",
      "url" : "http://www.tradium.dk/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2015 - Future",
      "url" : "https://www.udacity.com"
    },
    {
      "title" : "Akademiuddannelse i IT",
      "school" : "smartlearning",
      "dates" : "2011-2014",
      "url" : "https://www.smartlearning.dk/akademiuddannelser/it#gsc.tab=0"
    }
  ]
}

education.display = function(){
  for (var school in education.schools) {
    //HTMLschoolStart
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajors = "";

    for (var major in education.schools[school].majors) {
      formattedSchoolMajors += HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
    }
    HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);

    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors);
  }

  $("#education").append(HTMLonlineClasses);

  for (var onlineCourse in education.onlineCourses) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
  }
}


education.display();

var projects = {
  "projects": [
    {
      "title" : "IOS/Android Booking App",
      "dates" : "2013 - Future",
      "description" : "A booking app for members of various fitness gyms, using Sport Solution.",
      "images" : ["images/screen568x568.jpeg","images/screen568x568_3.jpeg","images/screen568x568_2.jpeg"]
    },
    {
      "title" : "Responsive webshop",
      "dates" : "2015 - Future",
      "description" : "A responsive webshop solution, for selling gym memberships, ticket for events, and various goods.",
      "images" : ["images/webshop_1.png","images/webshop_2.png"]
    }
  ]
}

projects.display = function(){
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedPojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    var formattedProjectImages = "";
    for (var image in projects.projects[project].images) {
      formattedProjectImages += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    }

    $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedPojectDescription + formattedProjectImages);
  }
};

projects.display();

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

//$("#main").append(internationalizeButton);

// var inName = function() {
//
//     var names = [];
//     names = bio.name.split(" ");
//     var _returnName = names[0].charAt(0).toUpperCase() + names[0].slice(1) + " " + names[1].toUpperCase();
//     console.log(_returnName);
//
// };

$("#mapDiv").append(googleMap);
