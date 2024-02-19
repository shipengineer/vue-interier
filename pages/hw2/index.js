const app = new Vue({
  el: "#app",
  data: {
    selected: null,
    sortedItems: [],
    items: [
      {
        id: 1,
        name: "Laptop",
        price: 999,
      },
      {
        id: 2,
        name: "Smartphone",
        price: 699,
      },
      {
        id: 3,
        name: "Headphones",
        price: 149,
      },
      {
        id: 4,
        name: "Tablet",
        price: 299,
      },
      {
        id: 5,
        name: "Wireless Mouse",
        price: 29,
      },
      {
        id: 6,
        name: "Smartwatch",
        price: 199,
      },
      {
        id: 7,
        name: "External Hard Drive",
        price: 79,
      },
      {
        id: 8,
        name: "Camera",
        price: 499,
      },
      {
        id: 9,
        name: "Printer",
        price: 129,
      },
      {
        id: 10,
        name: "Gaming Console",
        price: 399,
      },
      {
        id: 11,
        name: "Bluetooth Speaker",
        price: 89,
      },
      {
        id: 12,
        name: "Monitor",
        price: 249,
      },
      {
        id: 13,
        name: "Router",
        price: 149,
      },
      {
        id: 14,
        name: "Keyboard",
        price: 49,
      },
      {
        id: 15,
        name: "Webcam",
        price: 59,
      },
      {
        id: 16,
        name: "Fitness Tracker",
        price: 79,
      },
      {
        id: 17,
        name: "Flash Drive",
        price: 19,
      },
      {
        id: 18,
        name: "Portable Charger",
        price: 39,
      },
      {
        id: 19,
        name: "Memory Card",
        price: 24,
      },
      {
        id: 20,
        name: "Wireless Keyboard and Mouse Combo",
        price: 69,
      },
    ],
  },
  methods: {
    sortChangeHandler() {
      if (this.selected == "max")
        this.items = this.items.sort((a, b) => (b.price > a.price ? 1 : -1));
      if (this.selected == "min")
        this.items = this.items.sort((a, b) => (b.price < a.price ? 1 : -1));
    },
  },
});
