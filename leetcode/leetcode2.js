var l1 = parseArrayToListNod([9,9,9,9,9,9,9]);
var l2 = parseArrayToListNod([9,9,9,9]);
var l3 = [];

function parseArrayToListNod(arr) {
    var listNode = new ListNode(0);
    var head = listNode;
    for (var i = 0; i < arr.length; i++) {
        head.next = new ListNode(arr[i]);
        head = head.next;
    }
    return listNode.next;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(0);
    var headL3 = l3;
    var remember = 0;
    while (l1 || l2 || remember > 0) {
        var valNodeL1 = l1 ? l1.val : 0;
        var valNodeL2 = l2 ? l2.val : 0;
        var sum = (valNodeL1 + valNodeL2 + remember);

        headL3.next = new ListNode(sum % 10);
        headL3 = headL3.next;

        var floor = Math.floor(sum / 10);
        remember = floor;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return l3.next;
};
console.log(addTwoNumbers(l1, l2));
