const work = {
  /**
 * 多线程工具
 */
  thread: {

    /** 轮询计数 */
    _loop: 0,

    /** 线程池 {id:String, wait:int, thraad: webWorker} */
    _pool: [],

    /** 任务Map, key为每个任务的唯一ID, value存储任务的回调函数等信息 */
    taskMap: new Map(),

    /** 均衡策略 */
    BALANCE_RULE: {
      /** 轮询 */
      ROUND_ROBIN: 0,
      /** 最佳可用, 选择等待排队最短的队列 */
      BEST_AVAILABLE: 1,
      /** 随机, 应该不太会用到 */
      RANDOM: 99
    },

    /** 均衡算法 */
    BALANCE_ALGORITHM: {
      /** @return {number} 轮询下标 */
      ROUND_ROBIN: function () {
        return this._loop++ % this._pool.length;
      },
      /** @return {number} 等待最少的任务下标 // TODO SHADOW 待优化,子线程RTT由哪段处理 */
      BEST_AVAILABLE: function () {
        var min, index = 0;
        this._pool.forEach(function (thread, i) {
          var wait = thread.wait;
          if (typeof min === "undefined") {
            min = wait;
            index = i;
          } else {
            if (wait < min) {
              min = wait;
              index = i;
            }
          }
        });
        return index;
      },
      /** @return {number} 随机下标 */
      RANDOM: function () {
        return Math.round(Math.random() * (this._pool.length - 1))
      }
    },

    /** 负载均衡 */
    balanceRule: 0,

    /**
     * 默认回调函数
     * @param event 线程回到
     * @private
     */
    _defaultCallback: function (event) {
      var result = event.data;
      // 校验返回数据是否存在
      if (result.id) {
        this._updateThreadPool(result);
        this._reactive(result)
      } else {
        throw new Error("线程响应没有ID");
      }
    },

    /**
     * 响应方法
     * 通过ID 获取任务Map中的回调,然后调用
     * @param result 线程返回结果
     * @private
     */
    _reactive: function (result) {
      var task = this.taskMap.get(result.id);
      if (task && task.callback) {
        task.callback.call(undefined, result.body)
      }
      this.taskMap.delete(result.id);
    },

    /**
     * 更新线程池信息
     * @param task 线程返回结果
     * @private
     */
    _updateThreadPool: function (task) {
      this._pool.forEach(function (thread) {
        if (thread.id === task.threadId) {
          thread.wait = task.wait
        }
      })
    },

    /**
     * 初始化 - 单个线程
     * @param src 脚本路径
     * @param autoClose 是否自动关闭 默认true
     * @returns {Worker}
     */
    single: function (src, autoClose) {
      if (!Worker) {
        throw new Error("浏览器不支持Web Worker")
      }
      var scriptRegexp = /(\S*).js$/g;
      // 校验js文件的正确性
      if (!src || !scriptRegexp.test(src)) {
        throw new Error("脚本文件路径不正确!");
      }
      // 校验文件是否存在
      autoClose = autoClose !== false;
      var thread = new Worker(base + src);
      var the = this;
      thread.onmessage = function (event) {
        the._defaultCallback(event);
        if (autoClose) {
          the.terminate(thread);
        }
      };
      thread.onerror = function (ev) {
        throw new Error("线程创建失败!");
      };
      return thread;
    },

    /**
     * 初始化 - 线程池
     * @param src 脚本路径
     */
    pool: function (src) {
      var poolSize = navigator.hardwareConcurrency && navigator.hardwareConcurrency > 2 ? navigator.hardwareConcurrency : 2;
      var index = 0;
      while (index < poolSize) {
        this._pool.push({
          id: this.getUniqueID("THREAD_"),
          wait: 0,
          worker: this.single(src, false),
          closed: false
        });
        index++;
      }
    },

    /**
     * 执行任务,调用Worker.postMessage 向worker线程发送数据
     * @param options 参数
     * @param callback 回调
     * @param thread 线程
     */
    run: function (options, callback, thread) {
      if (!thread) {
        // 如果没有传入线程,向线程池获取资源
        thread = this.getWorker();
        if (!thread) {
          throw new Error("没有传入执行线程并且也没有在线程池中找到可用线程!")
        }
      }
      if (thread.closed) {
        throw new Error("该线程已关闭/释放资源!")
      }
      if (!options) {
        throw new Error("没有接收到任何参数!");
      }
      var id = this.getUniqueID("TASK_");
      var message = { id: id, body: options, threadId: thread.id };
      var task = { id: id, body: options, callback: callback };
      this.taskMap.set(task.id, task);
      thread instanceof Worker ? thread.postMessage(message) : thread.worker.postMessage(message);
    },

    /**
     * 获取线程池资源
     * 线程池使用机制,轮询,空闲优先,加权算法
     * @returns {Worker}
     */
    getWorker: function () {
      var index;
      switch (this.balanceRule) {
        case this.BALANCE_RULE.ROUND_ROBIN: index = this.BALANCE_ALGORITHM.ROUND_ROBIN.call(this); break;
        case this.BALANCE_RULE.BEST_AVAILABLE: index = this.BALANCE_ALGORITHM.BEST_AVAILABLE.call(this); break;
        case this.BALANCE_RULE.RANDOM: index = this.BALANCE_ALGORITHM.RANDOM.call(this); break;
      }
      return this._pool[index];
    },

    /**
     * 关闭线程,调用Worker.terminate
     * @param thread 线程对象
     */
    terminate: function (thread) {
      if (thread instanceof Worker) {
        thread.terminate();
      } else {
        thread.worker.terminate();
      }
      thread.closed = true;
    },

    /**
     * 清除线程池
     */
    destroy: function () {
      if (this._pool.length > 0) {
        this._pool.forEach(this.terminate);
      }
    },

    /**
    * 唯一ID
    */
    getUniqueID: function (prefix) {
      return (typeof prefix == 'undefined' || "" == prefix) ? 'prefix_' + Math.floor(Math.random() * (new Date()).getTime()) : prefix + Math.floor(Math.random() * (new Date()).getTime());
    }
  }

}