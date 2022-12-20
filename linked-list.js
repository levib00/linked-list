import Node from "./node.js"

function LinkedList() {
  let listLength = 0;
  this.headNode = null

  return {
    append(value) {
      let newNode = new Node(value)
      if (!this.headNode) {
        this.headNode = newNode;
        listLength += 1;
        return this.headNode
      }
      let tailNode = this.headNode
      while (tailNode.next !== null) {
        tailNode = tailNode.next
      }
      tailNode.next = newNode
      listLength += 1
      return this.headNode
    },

    prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.headNode
      this.headNode = newNode
      listLength += 1;
      return this.headNode
    },

    size() {
      console.log(listLength)
    },

    head() {
      return this.headNode
    },

    tail() {
      if (!this.headNode) return null
      let nextNode = this.headNode
      while (nextNode.next) {
        nextNode = nextNode.next
      }
      if (nextNode.next === null) {
        return nextNode
      }
      return nextNode
    },

    at(index) {
      if (!this.headNode) return null
      let i = 0
      let nextNode = this.headNode
      while (nextNode.next) {
        if (i === index) {
          return nextNode.value
        }
        nextNode = nextNode.next
        i += 1
      }
      if (i === index) {
        return nextNode.value
      }
      return null
    },

    pop() {
      if (!this.headNode) {
        return null;
      }
      if (!this.headNode.next) {
        this.headNode = null
        return
      }
      let previous = this.headNode
      let tailNode = this.headNode.next

      while (tailNode.next !== null) {
        previous = tailNode
        tailNode = tailNode.next
      }
      previous.next = null
      return this.headNode
    },

    contains(value) {
      if (!this.headNode) {
        return false
      }
      if (this.headNode.value === value) return true

      let nextNode = this.headNode.next
      while (nextNode.next) {
        if (value === nextNode.value) return true
        nextNode = nextNode.next
        if (value === nextNode.value) return true
      }
      return false
    },

    find(value) {
      if (!this.headNode) return null
      let nextNode = this.headNode
      let i = 0;
      while (nextNode.next !== null) {
        if (value === nextNode.value) return i
        nextNode = nextNode.next
        i += 1;
      }
      if (value === nextNode.value) return i
      return null
    },

    toString() {
      if (!this.headNode) return null
      let nodesString = ''
      let nextNode = this.headNode
      while (nextNode.next) {
        nodesString += `( ${nextNode.value.toString()} ) -> `;
        nextNode = nextNode.next
      }
      nodesString += `( ${nextNode.value.toString()} ) -> null`;
      return nodesString
    }
  }
}
