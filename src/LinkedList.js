class LinkedList {
  #head = null;
  #size = 0;
  append(value) {
    if (this.#head === null) this.#head = value;
    else {
      let current = this.#head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = value;
    }
    this.#size++;
    return this;
  }

  prepend(value) {
    if (this.#head === null) this.#head = value;
    else {
      value.nextNode = this.#head;
      this.#head = value;
    }
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head;
  }

  tail() {
    let current = this.#head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(position) {
    if (position === 0) return this.head();
    let current = this.#head;
    let counter = 1;

    while (current.nextNode !== null) {
      if (counter === position) return current.nextNode;
      counter += 1;
      current = current.nextNode;
    }
    throw new Error("Item not found.");
  }
  pop() {
    let current = this.#head;
    let previous;
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.#size--;
  }
  contains(value) {
    let current = this.#head;
    while (current.nextNode !== null) {
      if (current.value === value) return true;

      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    if (this.#head.value === value) return 0;

    let current = this.#head;
    let counter = 1;

    while (current.nextNode !== null) {
      if (current.nextNode.value === value) return counter;
      current = current.nextNode;
      counter++;
    }
    return null;
  }

  toString() {
    let current = this.#head;
    let string = "";
    while (current.nextNode !== null) {
      string += `( ${current.value} )->`;
      current = current.nextNode;
    }
    string += `( ${current.value} )->`;

    return `${string} null`;
  }
  insertAt(index, node) {
    if (index === 0) {
      this.prepend(node);
      this.#size++;
      return this;
    }

    if (index === this.size()) {
      this.append(node);
      this.#size++;
      return this;
    }
    let current = this.#head;
    let previous;
    let counter = 1;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
      if (index === counter) {
        previous.nextNode = node;
        node.nextNode = current;
        this.#size++;
        break;
      }
      counter++;
    }
  }
  removeAt(index) {
    if (index === 0) {
      this.#head = this.#head.nextNode;
      this.#size--;
      return;
    }

    if (index === this.size() - 1) {
      let current = this.#head;
      let previous;
      while (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
      this.#size--;

      return;
    }

    let current = this.#head;
    let previous;
    let counter = 1;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
      if (index === counter) {
        previous.nextNode = current.nextNode;
        this.#size--;

        break;
      }
      counter++;
    }
  }
}

export default new LinkedList();
