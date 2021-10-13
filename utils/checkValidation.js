export const checkEmptyKeyOfValue = (userInfo) => {
  const userInputData = Object.entries(userInfo);

  const userInputInfo = new Map(userInputData);
  for (let data of userInputInfo) {
    console.log(data);
    if (data[1] === '') return data[0];
  }
};

export const checkEmptyKey = (KeyList, userInfo) => {
  const keyArr = [];
  let emptyKeyArr = [];
  const userInputData = Object.entries(userInfo);
  const userInputInfo = new Map(userInputData);

  for (let key of userInputInfo.keys()) {
    if (KeyList.includes(key)) {
      keyArr.push(key);
      const InputKeyAndListArr = keyArr.concat(KeyList);
      const emptyKey = InputKeyAndListArr.filter((e) => !keyArr.includes(e));
      emptyKeyArr = [...emptyKey];
    }
  }
  return emptyKeyArr;
};
