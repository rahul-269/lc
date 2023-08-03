/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null || head.next === null)
    return head;
    else{
    let pointer = head; //pointer that points to location of head
    while( pointer != null && pointer.next != null)
    {
        if(pointer.val === pointer.next.val) //if current value equals next value
            pointer.next = pointer.next.next; //pointer of next is set to pointer of the element after that , skipping over the duplicate
            
        else 
            pointer = pointer.next; //pointer increment to next
    }
    return head 
    }
};