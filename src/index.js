import LinkedList from "./LinkedList";
import { Node } from "./Node";
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

LinkedList.append(a);
LinkedList.append(b);
LinkedList.append(c);
LinkedList.append(d);

console.log(LinkedList.size());
LinkedList.removeAt(2);
console.log(LinkedList.size());
