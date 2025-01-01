import { rest } from 'msw';
import lectures from './data/lectures.json';

export const handlers = [


    // 닉네임 중복 검사
    rest.get('/api/users/checkNickname', (req, res, ctx) => {
        const nickname = req.url.searchParams.get('nickname');

        if (!nickname) {
        return res(ctx.status(400), ctx.json({ message: '닉네임이 필요합니다.' }));
        }

        const isDuplicate = mockLectures.some((lecture) => lecture.instructor === nickname);
        return res(
        ctx.status(200),
        ctx.json({ isDuplicate })
        );
    }),
];
