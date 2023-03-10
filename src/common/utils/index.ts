export const cardInfo = [
  {
    id: 1,
    title: "Basic",
    tier: "Free",
    description: "Up to 5 users for free",
    img: false,
    features: [
      {
        id: "i1",
        title: "Basic document collaboration",
      },
      {
        id: "i2",
        title: "2 GB storage",
      },
      {
        id: "i3",
        title: "Great security and support",
      },
    ],
  },
  {
    id: 2,
    title: "Pro",
    tier: "$9.99",
    description: "Per user, billed monthly",
    img: true,
    features: [
      {
        id: "e1",
        title: "All essential integrations",
      },
      {
        id: "e2",
        title: "50 GB storage",
      },
      {
        id: "e3",
        title: "More control and insights",
      },
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    tier: "$19.99",
    description: "Per user, billed monthly",
    img: false,
    features: [
      {
        id: "p1",
        title: "Robust work management",
      },
      {
        id: "p2",
        title: "VIP support",
      },
      {
        id: "p3",
        title: "More control and insights",
      },
    ],
  },
];

export const date = ["days", "hours", "min", "sec"];

export const inputInfo = [
  {
    id: "name",
    name: "Name",
    select: false,
  },
  {
    id: "tier",
    name: "Options",
    options: [
      {
        id: "tier1",
        name: "Basic Pack",
        price: "Free",
      },
      {
        id: "tier2",
        name: "Pro Pack",
        price: "$9.99",
      },
      {
        id: "tier3",
        name: "Ultimate Pack",
        price: "$19.99",
      },
    ],
    select: true,
  },
  {
    id: "email",
    name: "Email Address",
    select: false,
  },
  {
    id: "number",
    name: "Phone Number",
    select: false,
  },
  {
    id: "company",
    name: "Company",
    select: false,
  },
];
