const userData = {
  users: [
    {
      name: "sufi",
      email: "sufi@gmail.com",
      location: "india",
      nestedName: {
        name: "nestedName",
        email: "nestedName@gmail.com",
      },
      image:
        "https://fastly.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg",
    },
    {
      name: "ali",
      email: "ali@gmail.com",
      location: undefined,
      otherLocatio: "NewLOc",
      image:
        "https://fastly.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg",
    },
    {
      name: "sohel",
      email: "sohel@gmail.com",
      location: null,
      image:
        "https://fastly.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg",
    },
    {
      name: "saurabh",
      email: "saurabh@gmail.com",
      location: false,
      image:
        "https://fastly.picsum.photos/id/839/200/200.jpg?hmac=IKyeqXa3iOwFkcM24B_X_Qjf9643wuDTCsTiM3T6AZg",
    },
  ],
};

$(document).ready(function () {
  var userTemplate = $("#users-template").html();

  var compliedUsersTemp = Handlebars.compile(userTemplate);

  console.log(compliedUsersTemp(userData.users[2]));

  $(".users-container").html(compliedUsersTemp(userData));
});
