let rooms = [
    {
      name: "Standard",
      seats: "150",
      price: "1000",
      amenities: "wifi,non-ac,screen with projector",
      roomID: "100",
      status: "true",
      bookedDetails: [
        {
          customerName: "Robin",
          bookedDate: new Date("2022-11-20"),
          startTime: "2022-11-20T08:30",
          endTime: "2022-11-20T11:30",
          status: "confirmed",
          roomID: "100",
        },
      ],
    },
    {
      name: "Elite",
      seats: "250",
      price: "2000",
      amenities: "wifi,ac,screen with projector",
      roomID: "101",
      status: "false",
      bookedDetails: [{}],
    },
    {
      name: "Premium",
      seats: "350",
      price: "3000",
      amenities: "wifi,ac,screen with projector",
      roomID: "102",
      status: "true",
      bookedDetails: [
        {
          customerName: "Sarvana",
          bookedDate: new Date("2022-12-25"),
          startTime: "2022-12-25T20:30",
          endTime: "2022-12-25T22:30",
          status: "Payment_Pending",
          roomID: "102",
        },
      ],
    },
  ];

  module.exports=rooms;