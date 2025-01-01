import { rest } from 'msw';
import lectures from './data/lectures.json';

export const handlers = [
    // 강의 리스트 조회
    rest.get('/api/lectures', (req, res, ctx) => {
        return res(
        ctx.status(200),
        ctx.json(lectures)
        );
    }),

    // 특정 강의 정보 가져오기
    rest.get('/api/classes/:classId', (req, res, ctx) => {
        const { classId } = req.params;
        const lecture = mockLectures.find((lecture) => lecture.id === parseInt(classId, 10));

        if (!lecture) {
        return res(ctx.status(404), ctx.json({ message: '강의를 찾을 수 없습니다.' }));
        }

        return res(
        ctx.status(200),
        ctx.json({ data: lecture })
        );
    }),

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
