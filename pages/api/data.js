// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    fullname: {
      surname: "Иванова",
      name: "Анна",
      patronym: "Михайловна",
    },
    email: "Ivanova@mail.ru",
    phoneNumber: "+79890907890",
  });
};
