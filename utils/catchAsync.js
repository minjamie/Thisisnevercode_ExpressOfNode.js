// 1번 방식 -
// module.exports = (fn) => {
//   return (req, res, next) => {
//     fn(req, res, next).catch(next);
//   };
// };

// 2번 방식 - Promise 리턴해서 resolve, reject를 catch로
// module.exports = (fn) => {
//   return (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   };
// };

// 3번 방식 - asycn 함수가 아닐 땐 try/catch로
module.exports = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
