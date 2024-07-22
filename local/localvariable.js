let customers=[{
    customerName:"siva",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:{roomId:1,roomName:"cool"},
    bookingDate:Date.toString(),
   
},
{
    customerName:"vignesh",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:{roomId:2,roomName:"Hot"},
    bookingDate:Date.toString(),
   
},
{
    customerName:"Bala",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:{roomId:3,roomName:"chill"},
    bookingDate:Date.toString(),
   
},
{
    customerName:"harish",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:null,
    bookingDate:null,
   
},
{
    customerName:"Sheik",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:null,
    bookingDate:null,
   
},
{
    customerName:"dheena",
    date:Date.toString(),
    startTime:Date.now(),
    endTime:Date.now(),
    bookingId:{roomId:4,roomName:"delux"},
    bookingDate:null,
   
}
]

let rooms=[{
    roomName:"cool",
    NoofSeats:"5",
    amenties:"Ac with 2bhk",
    price:"₹ 5000 per week",
    roomId:"1",
    bookingStatus:"Booked"
},
{
    roomName:"Hot",
    NoofSeats:"4",
    amenties:"Ac with 1bhk",
    price:"₹ 6000 per week",
    roomId:"2",
    bookingStatus:"Booked"
},
{
    roomName:"chil",
    NoofSeats:"3",
    amenties:"Non-Ac with 2bhk",
    price:"₹ 5000 per week",
    roomId:"3",
    bookingStatus:"Booked"
},
{
    roomName:"delux",
    NoofSeats:"7",
    amenties:"Ac with 2bhk-withelctronics",
    price:"₹ 10000 per week",
    roomId:"4",
    bookingStatus:"Booked"
},
{
    roomName:"Rose",
    NoofSeats:"1",
    amenties:"Non-Ac with 1bhk",
    price:"₹ 2000 per week",
    roomId:"5",
    bookingStatus:"Non-Booked"
},
{
    roomName:"Coke",
    NoofSeats:"7",
    amenties:"Ac with 2bhk",
    price:"₹ 4000 per week",
    roomId:"6",
    bookingStatus:"Non-Booked"
},
{
    roomName:"Cherry",
    NoofSeats:"10",
    amenties:"Ac with 2bhk-Tv WIFI,Mini-theater",
    price:"₹ 15000 per week",
    roomId:"7",
    bookingStatus:"Non-Booked"
}]

export{customers,rooms}