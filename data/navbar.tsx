const Departments = [
  {
    name: "Computers & Accessories",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg>
    ),
    starting_from: {
      imgURL: "https://cartzilla.createx.studio/img/shop/departments/07.jpg",
      price: 149.8,
      url: "",
    },
    subcats: [
      {
        title: "Computers",
        urls: [
          {
            label: "Laptops & Tablets",
            url: "#",
          },
          {
            label: "Desktop Computers",
            url: "#",
          },
          {
            label: "Computer External Components",
            url: "#",
          },
          {
            label: "Computer Internet Components",
            url: "#",
          },
          {
            label: "Networking Products (NAS)",
            url: "#",
          },
          {
            label: "Single Board Computers",
            url: "#",
          },
          {
            label: "Desktop Barebones",
            url: "#",
          },
        ],
      },
      {
        title: "Accessories",
        urls: [
          {
            label: "Monitors",
            url: "#",
          },
          {
            label: "Bags, Cases & Sleeves",
            url: "#",
          },
          {
            label: "Batteries",
            url: "#",
          },
          {
            label: "Chargers & Adapters",
            url: "#",
          },
          {
            label: "Cooling Pads",
            url: "#",
          },
          {
            label: "Mounts",
            url: "#",
          },
          {
            label: "Replacement Screens",
            url: "#",
          },
          {
            label: "Security Locks",
            url: "#",
          },
          {
            label: "Stands",
            url: "#",
          },
        ],
      },
    ],
  },
];

export default Departments;
