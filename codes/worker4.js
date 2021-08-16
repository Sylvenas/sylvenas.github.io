class Queue {
  constructor() {
    this.taskList = [];
    this.timerIdList=[]
  }

  task(wait,fn) {
    this.taskList.push([wait, fn])
    return this
  }

  start(initialVal) {
    let timeSum = 0
    let res = initialVal
    this.taskList.forEach(item => {
      timeSum += item[0];
      const timerId = setTimeout(
        function () {
          res = item[1](res)
        },
        timeSum);
      
      this.timerIdList.push(timerId)
    })
  }

  stop() {
    this.timerIdList.forEach(timerId => {
      clearTimeout(timerId)
    })
  }
}

const queue = new Queue();
queue
  .task(1000, (x) => { console.log(x + 'a'); return x + 'a'})
  .task(2000, (x) => { console.log(x + 'b'); return x + 'b' })
  .task(2000, (x) => { console.log(x + 'c'); return x + 'c' })
  .start("123")


setTimeout(() => {
  queue.stop()
},4000)