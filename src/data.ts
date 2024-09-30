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
//     id: 1,
//     img: "./assets/images/users/user-1.png",
//     username: "Angel Thomas",
//     email: "angel@gmail.com",
//     amount: "1,560",
//   },
//   {
//     id: 2,
//     img: "./assets/images/users/user-1.png",
//     username: "John Doe",
//     email: "john.doe@gmail.com",
//     amount: "2,340",
//   },
//   {
//     id: 3,
//     img: "./assets/images/users/user.png",
//     username: "Jane Smith",
//     email: "jane.smith@gmail.com",
//     amount: "1,230",
//   },
//   {
//     id: 4,
//     img: "./assets/images/users/user-1.png",
//     username: "David Johnson",
//     email: "david.johnson@gmail.com",
//     amount: "4,120",
//   },
//   {
//     id: 5,
//     img: "./assets/images/users/user.png",
//     username: "Sophia Williams",
//     email: "sophia.williams@gmail.com",
//     amount: "3,980",
//   },
//   {
//     id: 6,
//     img: "./assets/images/users/user-1.png",
//     username: "Michael Brown",
//     email: "michael.brown@gmail.com",
//     amount: "2,750",
//   },
//   {
//     id: 7,
//     img: "./assets/images/users/user.png",
//     username: "Emily Davis",
//     email: "emily.davis@gmail.com",
//     amount: "5,600",
//   },
// ];

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
