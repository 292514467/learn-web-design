/**
 * 功能：通过id获取指定元素
 * @param {*} id 
 * @returns {Element|*|Node}
 */
function getEle(id) {
    return document.getElementById(id);
}
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param {*} ele 
 * @returns {Element|*|Node}
 */
function getFirstNode(ele) {
    let node = ele.firstElementChild || ele.firstChild
    return node;
}
/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param {*} ele 
 * @returns {Element|*|Node}
 */
function getLastNode(ele) {
    let node = ele.lastElementChild || ele.lastChild
    return node;
}
/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param {*} ele 
 * @returns {Element|*|Node}
 */
function getNextNode(ele) {
    /* nextSibling属性返回元素节点之后的兄弟节点（包括文本节点、注释节点即回车、换行、空格、文本等等，空格、回车也会看做文本，以文本节点对待）；
    nextElementSibling属性只返回元素节点之后的兄弟元素节点（不包括文本节点、注释节点）； */
    return ele.nextElementSibling || ele.nextSibling;
}
/**
 * 功能：给定元素查找他的上一个元素兄弟节点，并返回
 * @param {*} ele 
 * @returns {Element|*|Node}
 */
function getPrevNode(ele) {
    return ele.previousElementSibling || ele.previousSibling;
}
/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele, index) {
    return ele.parentNode.children[index];
}
/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele) {
    //定义一个新数组，装所有的兄弟元素，将来返回
    let newArr = [];
    // arr数组装传入元素的父节点的所有子节点，其中包含传入元素本身，需要过滤
    let arr = ele.parentNode.children;
    for (let i = 0; i < arr.length; i++) {
        // 对同级所有元素节点进行遍历，如果不是传递过来的元素，即兄弟匀速，就添加到新数组中
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
