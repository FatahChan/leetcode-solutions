/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


let newHead = new ListNode();

function recursiveReverseList(head: ListNode | null): ListNode | null {

    if (head ===null) return null

    const returnedHead = recursiveReverseList(head.next)
    if (returnedHead === null){
        newHead = head;

        return head
    }
    returnedHead.next = head

    head.next = null
    return head
}

function reverseList(head: ListNode | null){

    if (head ===null) return null

    const returnedHead = recursiveReverseList(head)
    returnedHead?.next == null

    return newHead
}



const test1 = [1,2,3,4,5]
const head = new ListNode(test1[0], new ListNode(test1[1], new ListNode(test1[2], new ListNode(test1[3], new ListNode(test1[4])))))
console.log(reverseList(head))


const test2 = [1,2]
const head2 = new ListNode(test2[0], new ListNode(test2[1]))
console.log(reverseList(head2))

const test3 = [1]
const head3 = new ListNode(test3[0])
console.log(reverseList(head3))

const test4 = []
const head4 = null
console.log(reverseList(head4))