// function* arrayGenerator(array) {
//   for (let index = 0; index < array.length; index++) {
//     const task = array[index]
//     yield [task, index]
//   }
// }

// async function createWorker(gen, result) {
//   for (const [task, index] of gen) {
//     try {
//       const res = await task()
//       result[index] = {
//         ok: true,
//         res,
//       }
//     } catch (error) {
//       result[index] = {
//         ok: false,
//         error,
//       }
//     }

//   }
// }

// async function asyncLimit(taskList, limit) {
//   limit = Math.min(taskList.length, limit)

//   const result = []
//   const gen = arrayGenerator(taskList)

//   const workList = new Array(limit)
//     .fill(1)
//     .map(() => createWorker(gen, result))

//   await Promise.all(workList)
//   return result
// }

async function limitAsync(taskList, limit) {
  let taskLen = taskList.length
  let doing = 0;
  let result = []

  async function runTask(taskList) {
    if (doing < limit && taskList.length) {
      doing++
      runTask(taskList)

      const index = taskLen - taskList.length
      const firstTask = taskList.shift()
      const res = await firstTask();

      doing--
      result[index] = res
      return runTask(taskList)
    }
  }
  await runTask(taskList)
  return result
}

const fetchRocket = (id) => {
  console.log("---fetchRocket---", id)
  return new Promise((res, rej) => {
    setTimeout(() => res(id), 2000)
  })
}
const idList = new Array(10).fill(1).map((_, i) => i + 1)
const fetchList = idList.map(id => () => fetchRocket(id))

limitAsync(fetchList, 4).then(console.log)