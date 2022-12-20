export default class Node {
  constructor (value, next = null) { 
    this.value = value
    this.next = next
  }
}

const list = new LinkedList()
list.append('value0')
list.append('value1')
list.append('value2')
list.append('value3')
