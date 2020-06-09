const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    decrement(index) {
      // console.log(index);
      this.books[index].count--
    },
    increment(index) {
      // console.log(index);
      this.books[index].count++
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // let result = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   result += this.books[i].price * this.books[i].count;
      // }
      // return result

      // for(let i in this.books)
      // let result = 0;
      // for(let i in this.books){
      //   // result += this.books[i].price * this.books[i].count
      //   let books = this.books[i];
      //   result += books.price * books.count
      // }
      // return result

      // for(let i of this.books)
      // let result = 0;
      // for (let item of this.books) {
      //   result += item.price * item.count
      // }
      // return result

      // reduce
      return this.books.reduce((preVal,books)=>{
        return preVal += books.price * books.count
      },0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})