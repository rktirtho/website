// Footer to_year
document.querySelector('.to_year').textContent = new Date().getFullYear();

// Version
document.querySelector('.version').textContent = version;

// Age of club
let age;

var today = new Date();
var birthday = new Date(2019, 7 - 1, 28);
var differenceInMilisecond = today.valueOf() - birthday.valueOf();

var year_age = Math.floor(differenceInMilisecond / 31536000000);
var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

var month_age = Math.floor(day_age / 30);

day_age = day_age % 30;

var tMnt = month_age + year_age * 12;
var tDays = tMnt * 30 + day_age;

age = `${year_age} Years. ${month_age} M. ${day_age} D.`;

document.querySelector('.age_of_club').textContent = age;

// Tab
$('#myTab a').on('click', function(e) {
  e.preventDefault();
  $(this).tab('show');
});

// Count
document.querySelector('.members_count').textContent = membersCount;
document.querySelector('.events_count').textContent = eventsCount;
document.querySelector('.projects_count').textContent = projectsCount;
document.querySelector('.contests_count').textContent = contestsCount;

// Notice
document.querySelector('.next_meeting').textContent = nextMeetingDate;
