export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: require("./assets/images/icons/home.svg").default,
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: require("./assets/images/icons/user.svg").default,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: require("./assets/images/icons/user.svg").default,
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: require("./assets/images/icons/product.svg").default,
      },
      {
        id: 3,
        title: "Orders",
        url: "/",
        icon: require("./assets/images/icons/order.svg").default,
      },
      {
        id: 4,
        title: "Posts",
        url: "/",
        icon: require("./assets/images/icons/post.svg").default,
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: require("./assets/images/icons/element.svg").default,
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: require("./assets/images/icons/note.svg").default,
      },
      {
        id: 3,
        title: "Calendar",
        url: "/",
        icon: require("./assets/images/icons/calendar.svg").default,
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: require("./assets/images/icons/setting.svg").default,
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: require("./assets/images/icons/backup.svg").default,
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: require("./assets/images/icons/chart.svg").default,
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: require("./assets/images/icons/log.svg").default,
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: require("./assets/images/users/user-1.png"),
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1,560",
  },
  {
    id: 2,
    img: require("./assets/images/users/user-1.png"),
    username: "John Doe",
    email: "john.doe@gmail.com",
    amount: "2,340",
  },
  {
    id: 3,
    img: require("./assets/images/users/user.png"),
    username: "Jane Smith",
    email: "jane.smith@gmail.com",
    amount: "1,230",
  },
  {
    id: 4,
    img: require("./assets/images/users/user-1.png"),
    username: "David Johnson",
    email: "david.johnson@gmail.com",
    amount: "4,120",
  },
  {
    id: 5,
    img: require("./assets/images/users/user.png"),
    username: "Sophia Williams",
    email: "sophia.williams@gmail.com",
    amount: "3,980",
  },
  {
    id: 6,
    img: require("./assets/images/users/user-1.png"),
    username: "Michael Brown",
    email: "michael.brown@gmail.com",
    amount: "2,750",
  },
  {
    id: 7,
    img: require("./assets/images/users/user.png"),
    username: "Emily Davis",
    email: "emily.davis@gmail.com",
    amount: "5,600",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: require("./assets/images/icons/userIcon.svg").default,
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: require("./assets/images/icons/productIcon.svg").default,
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: require("./assets/images/icons/revenueIcon.svg").default,
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: require("./assets/images/icons/conversionIcon.svg").default,
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: require("./assets/images/users/user.png"),
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Smith",
    firstName: "John",
    email: "johnsmith@gmail.com",
    phone: "987 654 321",
    createdAt: "03.05.2023",
    verified: false,
  },
  {
    id: 3,
    img: require("./assets/images/users/user.png"),
    lastName: "Brown",
    firstName: "Jane",
    email: "janebrown@gmail.com",
    phone: "456 123 789",
    createdAt: "15.06.2023",
    verified: true,
  },
  {
    id: 4,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Davis",
    firstName: "Michael",
    email: "michaeld@gmail.com",
    phone: "789 123 456",
    createdAt: "07.03.2023",
    verified: true,
  },
  {
    id: 5,
    img: require("./assets/images/users/user.png"),
    lastName: "Taylor",
    firstName: "Emma",
    email: "emmat@gmail.com",
    phone: "321 654 987",
    createdAt: "20.04.2023",
    verified: false,
  },
  {
    id: 6,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Anderson",
    firstName: "Chris",
    email: "chrisand@gmail.com",
    phone: "123 987 654",
    createdAt: "25.05.2023",
    verified: true,
  },
  {
    id: 7,
    img: require("./assets/images/users/user.png"),
    lastName: "Miller",
    firstName: "Sophia",
    email: "sophiam@gmail.com",
    phone: "654 321 987",
    createdAt: "12.07.2023",
    verified: false,
  },
  {
    id: 8,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Wilson",
    firstName: "James",
    email: "jamesw@gmail.com",
    phone: "789 456 123",
    createdAt: "30.06.2023",
    verified: true,
  },
  {
    id: 9,
    img: require("./assets/images/users/user.png"),
    lastName: "Martinez",
    firstName: "Isabella",
    email: "isam@gmail.com",
    phone: "987 321 654",
    createdAt: "08.08.2023",
    verified: true,
  },
  {
    id: 10,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Clark",
    firstName: "David",
    email: "davidc@gmail.com",
    phone: "654 789 321",
    createdAt: "10.09.2023",
    verified: false,
  },
  {
    id: 11,
    img: require("./assets/images/users/user.png"),
    lastName: "Rodriguez",
    firstName: "Olivia",
    email: "oliviar@gmail.com",
    phone: "321 987 654",
    createdAt: "19.07.2023",
    verified: true,
  },
  {
    id: 12,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Garcia",
    firstName: "Robert",
    email: "robertg@gmail.com",
    phone: "123 456 987",
    createdAt: "28.04.2023",
    verified: true,
  },
  {
    id: 13,
    img: require("./assets/images/users/user.png"),
    lastName: "Lewis",
    firstName: "Emily",
    email: "emilyle@gmail.com",
    phone: "789 123 654",
    createdAt: "04.05.2023",
    verified: false,
  },
  {
    id: 14,
    img: require("./assets/images/users/user-1.png"),
    lastName: "Walker",
    firstName: "William",
    email: "williamw@gmail.com",
    phone: "987 654 123",
    createdAt: "22.08.2023",
    verified: true,
  },
];

export const products = [
  {
    id: 1,
    img: require("./assets/images/products/playstation-5.jpg"),
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: require("./assets/images/products/xbox.jpg"),
    title: "Xbox Series X",
    color: "black",
    producer: "Microsoft",
    price: "$299.99",
    createdAt: "03.04.2023",
    inStock: true,
  },
  {
    id: 3,
    img: require("./assets/images/products/nintendo-switch.jpg"),
    title: "Nintendo Switch",
    color: "red/blue",
    producer: "Nintendo",
    price: "$199.99",
    createdAt: "05.06.2023",
    inStock: false,
  },
  {
    id: 4,
    img: require("./assets/images/products/playstation-5.jpg"),
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: require("./assets/images/products/xbox.jpg"),
    title: "Xbox Series X",
    color: "black",
    producer: "Microsoft",
    price: "$299.99",
    createdAt: "03.04.2023",
    inStock: true,
  },
  {
    id: 6,
    img: require("./assets/images/products/nintendo-switch.jpg"),
    title: "Nintendo Switch",
    color: "red/blue",
    producer: "Nintendo",
    price: "$199.99",
    createdAt: "05.06.2023",
    inStock: false,
  },
  {
    id: 7,
    img: require("./assets/images/products/nintendo-switch.jpg"),
    title: "Nintendo Switch",
    color: "red/blue",
    producer: "Nintendo",
    price: "$199.99",
    createdAt: "05.06.2023",
    inStock: false,
  },
  {
    id: 8,
    img: require("./assets/images/products/nintendo-switch.jpg"),
    title: "Nintendo Switch",
    color: "red/blue",
    producer: "Nintendo",
    price: "$199.99",
    createdAt: "05.06.2023",
    inStock: false,
  },
  {
    id: 9,
    img: require("./assets/images/products/nintendo-switch.jpg"),
    title: "Nintendo Switch",
    color: "red/blue",
    producer: "Nintendo",
    price: "$199.99",
    createdAt: "05.06.2023",
    inStock: false,
  },
];

export const singleUser = {
  id: 1,
  title: "Demo User",
  img: require("./assets/images/users/user.png"),
  verified: true,
  info: {
    username: "Demo",
    fullname: "User",
    email: "demouser@test.com",
    phone: "123 456 789",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Demo User purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Demo User added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Demo User purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Demo User reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Demo User added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Demo User reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: require("./assets/images/products/playstation-5.jpg"),
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Demo User purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Demo User Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
