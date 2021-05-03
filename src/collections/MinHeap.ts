class MinHeap<T> {

  items: Array<T>;
  selector: Function;

  constructor(selector: Function) {
    this.items = [];
    this.selector = selector;
  }

  swap(index1: number, index2: number) {
    let tmp: T = this.items[index1];
    this.items[index1] = this.items[index2]
    this.items[index2] = tmp;
  }

  insert(item: T) {
    let i = this.items.length;
    this.items.push(item);
    let parentIndex = Math.floor((i + 1) / 2 - 1);
    if (parentIndex < 0) parentIndex = 0;
    let parentVal = this.selector(this.items[parentIndex]);
    const pushedVal = this.selector(this.items[i]);
    while (i > 0 && parentVal > pushedVal) {
      parentIndex = Math.floor((i + 1) / 2 - 1);
      this.swap(i, parentIndex);
      i = parentIndex;
      parentVal = this.selector(
        this.items[Math.max(Math.floor((i + 1) / 2 - 1), 0)]
      );
    }
  }

  remove(): T | undefined {
    if (this.items.length <= 1) return this.items.pop();
    const ret = this.items[0]; // What we will return
    let temp = this.items.pop();
    if(!temp) return undefined;
    this.items[0] = temp; // Place last element in array at front
    let i = 0; // We adjust heap from top to down
    while (true) {
      let rightChildIndex = (i + 1) * 2;
      let leftChildIndex = (i + 1) * 2 - 1;
      let lowest = rightChildIndex;
      if (
        leftChildIndex >= this.items.length &&
        rightChildIndex >= this.items.length
      )
        break;
      if (leftChildIndex >= this.items.length) lowest = rightChildIndex;
      if (rightChildIndex >= this.items.length) lowest = leftChildIndex;
      if (!(leftChildIndex >= this.items.length) &&
        !(rightChildIndex >= this.items.length)
      ) {
        lowest =
          this.selector(this.items[rightChildIndex]) <
            this.selector(this.items[leftChildIndex])
            ? rightChildIndex
            : leftChildIndex;
      } // Find the smallest child
      // If the parent is greater than the smallest child: swap
      if (this.selector(this.items[i]) > this.selector(this.items[lowest])) {
        this.swap(i, lowest);
        i = lowest;
      } else break; // We have finished setting up the heap
    }
    // Return topmost element
    return ret;
  }

  isEmpty(): boolean{
    return this.items.length === 0
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[0];
  }

  length() {
    return this.items.length;
  }
}

export default MinHeap;