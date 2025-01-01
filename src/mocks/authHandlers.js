import { rest } from 'msw';

export const authHandlers = [
  // 로그인
  rest.post(`/api/auth/login`, (req, res, ctx) => {
    const { username, password } = req.body;

    if (username === "test" && password === "password") {
      return res(
        ctx.status(200),
        ctx.json({
          token: "fake-jwt-token",
        })
      );
    }

    return res(
      ctx.status(401),
      ctx.json({
        message: "로그인 실패",
      })
    );
  }),

  // 로그아웃 등 추가 핸들러
];
