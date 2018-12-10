import Mock from 'mockjs'; 
// 定义数据
let Todos = []; 
// 数据量
const COUNT = [1, 2, 3, 4, 5]; 
for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.first(),
    isDelete: false, 
    locked: Mock.Random.boolean(), 
    // 代办单项列表的数据
    record: COUNT.map(() => {
      return {
        // 随机内容
        text: Mock.Random.cparagraph(2),
        isDelete: false,
        checked: Mock.Random.boolean()
      };
    })
  }));
}
export { // 导出列表数据
  Todos
};
