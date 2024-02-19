const app = new Vue({
  el: "#app",
  data: {
    reverseButton: "При нажатии на эту кнопку    А роза упала на лапу азор А",
    items: ["great", "welldone", "yrbest"],
  },
  methods: {
    reverseHandler() {
      let reversed = "";
      for (let i = this.reverseButton.length; i >= 0; i--) {
        reversed = reversed.concat(this.reverseButton[i]);
      }
      this.reverseButton = reversed.replace("undefined", "");
    },
    addItemHandler() {
      this.items.push("Новый элемент списка");
    },
    removeItemHandler(e) {
      e.preventDefault();
      const target = e.target;
      console.log(target);
      this.items.splice(target.id, 1);
    },
  },
});
console.log(app);
