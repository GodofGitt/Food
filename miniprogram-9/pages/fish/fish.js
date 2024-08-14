Page({
  data: {
    selectedOption: 1 , // 默认选中的选项
    username:'',
    password:"",
    peopleNum:2,//用餐人数
    flavorChecked: ['酸','辣','甜'], // 用于存储选中的口味偏好
  },
  handleRadioChange(event) {
    const { value } = event.currentTarget.dataset;
    this.setData({
      selectedOption: parseInt(value)
    });
  },

  
handleFlavorChange(event) {
  const { value } = event.detail;
  this.setData({
    flavorChecked: value,
  });

  // 根据选中的口味偏好执行相应的操作，例如保存到数据或进行其他处理
  console.log('选中的口味偏好:', this.data.flavorChecked);
},

});
