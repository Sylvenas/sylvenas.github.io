class Task {
  constructor() {
    this.taskList = []
    this.waitList = []
  }

  log(val) {
    if (this.waitList.length) {
      let timeOut = this.waitList.reduce((t, c) => t + c)
      setTimeout(() => {
        console.log(val)
      }, timeOut*1000)
    } else {
      console.log(val)
    }
    return this
  }

  wait(time) {
    this.waitList.push(time)
    return this
  }
}


const sleep = time => new Promise((res, rej) => {
  setTimeout(() => res(), time)
})


const t = new Task()

t.log(1).log(2).wait(5).log(3).wait(2).wait(3).log(4)