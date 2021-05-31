import React, { useState } from 'react';
import './index.css';
import Editor from './components/editor/index';
import Select from './components/select/index';
import SelectTwo from './components/selectTwo/index';
import CreateInput from './components/createInput/index';
import IsOnline from './components/isOnline/index';


interface Category {
  id: number,
  name: string
}

export default function LeftMenu(props) {
  const [category, setCategory] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState<Category>({id:-1,name:''});
  const [showDropDown,setShowDropDown] = useState('is-hoverable')

  const [secondMenu, setSecondMenu] = useState([]);
  const [selectedSecondMenu,setSelectedSecondMenu] = useState<Category>({id:-1,name:''});
  const [showSecondMenu,setShowSecondMenu] = useState('')

  const [note,setNote] = React.useState("## JavaScript中的数组是一种有序的数据结构。\n> js数组常用的方法有如下（es5）：\n\n- push，pop，shift，unshift\n\n```js\nlet list = [1,2,3,4,5];\n// 在数组的尾部添加新的元素\nlist.push(6,7,8); // output [1,2,3,4,5,6,7,8]\n// 移除数组的最后一个元素并返回\nlist.pop(); // output 8\n// 在数组头部添加新的元素\nlist.unshift(-1,0) // [-1,0,1,2,3,4,5]\n// 移除数组头部第一个元素并返回\nlist.shift() // -1\n```\n\n- 迭代方法 map,filter,find,findIndex\n\n```js\n// filter对数组中的每一项给定一个函数，返回该函数会返回true的项组成的数组\nlet list = [1,2,3,'a','b','c'];\n// 返回纯数字的数组\nlet filterLIst = list.filter((item,index,array) => {\n  return !isNaN(item);\n})\n// output [1,2,3]\n\n// map对数组的每一项给定一个函数，返回该函数的执行的结果组成的数组\nlet mapList = list.map((item,index,array) => {\n  return !isNaN(item)?++item:item+item;\n})\n// output [2,3,4,'aa','bb','cc']\n\n// find搜索到返回item。没有搜索到，则返回undefined\nlet findList = list.find((item,index,array) => item==='b') // 'b'\n\n// fingIndex 搜索到返回索引。没有搜索到，则返回-1\nlet fingIndexList = list.fingIndex((item,index,array) => item==='b') // 4\n```\n\n- 判断数组的方法\n\n```js\nlet list = [1,2,3];\nconsole.log(list instanceof Array) // true\nconsole.log(Array.isArray(list)) // true\n```\n\n- 重排序方法\n\n```js\nlet list = [0, 1, 5, 10, 15];\nconsole.log(list.sort());\n// output [ 0, 1, 10, 15, 5 ]  针对每一项转成字符在比较\nconsole.log(list.sort((a,b)=>a-b));\n// output [ 0, 1, 5, 10, 15 ]\n```\n\n- 操作方法\n\n```js\nlet list = [1,2,3,4,5,6,7,8];\nlet list2 = [9,10,11,12];\n// 合并数组\nlet list3 = list.concat(list2); // output [1,2,3,4,5,6,7,8,9,10,11,12]\n// 拆分数组\nlet list4 = list.slice(2,6) // output [3,4,5,6]\n// 多种操作数组  删除项的位置，删除项的项数，插入的项-返回删除的项的数组\nlet list5 = list.splice(0,3,9,10,11) // output [1,2,3]\n// list 等于  [9,10,11,4,5,6,7,8]\n```\n- 位置方法\n\n```js\nlet list = [1,2,3,4,5,6];\n// 查找的项，开始查找的位置， lastIndexOf从末尾开始\nlet index = list.indexOf(5,2); // 5\nlet index2 = list. includes(6,4) // true\n```\n- 归并方法\n\n```js\n// reduce()和 reduceRight()\nlet list = [1,2,3,4,5,6];\nlet res = reduce((prev,cur,index,array)=>prev+cur,0) // output 21\n```\n\n- 数组转换\n\n```js\nlet list = [1,2,3,4,5,6];\n// join返回包含所有数组项的字符串\nlet list2 = list.join(',') // 1,2,3,4,5,6\n// split通过分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中\nlet str = '1,2,3,4,5,6';\nlet list3 = str.split(',') // [1,2,3,4,5,6]\n// spread操作符\nlet str2 = '123456';\n// 任何可迭代对象都可以转换为数组\nlet list4 = [...str2] // output ['1','2','3','4','5','6']\n// 在函数调用中使用...arr时，把可迭代对象arr展开到参数列表中\nlet str3 = Math.max(list)\n// 深度复制一个新的数组,同理可以复制对象\nlet list5 = [...list];\nconsole.log(list === list5 ) // false\nlet obj = {a:1,b:2,c:3};\nlet obj2 = {...obj};\nconsole.log(obj === obj2 ) // false\n```")

  const [isOnline, setIsOnline] = useState(false);

  const [createTitle, setCreateTitle] = useState('');

  const request = function (params, callback) {
    fetch(params.url, {
      body: JSON.stringify(params.params),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    })
      .then(response => response.json())
      .then(res => {
        callback(res)
      })
  }  

  const handInMenu = function () {
    const { id } = selectedCategory
    const { name, id: secondId } = selectedSecondMenu
    const cate_Id = Date.now().toString()
    request({
      url: '/transaction',
      params: { 
        multipleTable: [
            {
              name:"articleInfo",
                fields:  {
                  cate_id: cate_Id,
                  isOnline: Number(isOnline),
                  title: createTitle,
                  content: encodeURIComponent(note)
                }
            },
            {
              name:"articleCategory",
              fields:  {
                pid: id,
                name:name,
                cust_id: cate_Id
              }
            }
        ]
    }
    }, function (res) {

    })
    
  }

  return (
    <div className="container left__menu">
      <nav className="level">
        <Select data={
          {
            category,
            setCategory,
            selectedCategory,
            setSelectedCategory,
            showDropDown,
            setShowDropDown,
            secondMenu, setSecondMenu,
            selectedSecondMenu,setSelectedSecondMenu,
            showSecondMenu,setShowSecondMenu,
          }
        } />
        <SelectTwo data={
          {
            secondMenu,
            setSecondMenu,
            selectedSecondMenu,
            setSelectedSecondMenu,
            showSecondMenu,
            setShowSecondMenu,
          }
        } />
        <CreateInput data={
          {createTitle, setCreateTitle}
        } />
        <IsOnline data={
          {isOnline, setIsOnline}
        } />
      </nav>
      <Editor />
      <div className="notification is-success is-light">
        <div className="block">
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={handInMenu} >新增</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}