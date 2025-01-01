import { rest } from 'msw';
import lectures from './data/lectures.json';

const mockLectures = [];

export const lectureHandlers = [
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

    // 강의 생성
    rest.post('/api/lectures', async (req, res, ctx) => {
        // 토큰 검증
        const authHeader = req.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res(
            ctx.status(401),
            ctx.json({ message: 'Unauthorized', message_kor: '로그인이 필요합니다.' })
          );
        }
    
        // FormData 추출
        const formData = await req.formData();
        const categoryId = formData.get('categoryId');
        const name = formData.get('name');
        const object = formData.get('object');
        const description = formData.get('description');
        const instructorInfo = formData.get('instructorInfo');
        const prerequisite = formData.get('prerequisite');
        const announcement = formData.get('announcement');
        const bannerImageFile = formData.get('bannerImagefile');
    
        // 필수 필드 검증
        if (!categoryId || !name || !object || !description || !instructorInfo) {
          return res(
            ctx.status(400),
            ctx.json({ 
              message: 'Bad Request', 
              message_kor: '필수 데이터가 누락되었습니다.' 
            })
          );
        }
    
        // 강의 데이터 생성
        const newLecture = {
          id: Date.now(),
          user_id: '123456789', // 예시 사용자 ID
          category_id: parseInt(categoryId, 10),
          instructor: 'tony짱!', // 예시 강사 이름
          category: '드로잉', // 카테고리 이름 예시
          name,
          object,
          description,
          instructor_info: instructorInfo,
          prerequisite: prerequisite || 'No prerequisites',
          announcement: announcement || 'No announcements',
          banner_image_path: bannerImageFile ? 'uploaded-image-path.png' : null,
          is_active: true,
        };
    
        // 강의 데이터를 메모리에 추가
        mockLectures.push(newLecture);
    
        // 성공 응답 반환
        return res(
          ctx.status(200),
          ctx.json({
            data: newLecture,
            message_kor: '강의실 생성 성공',
            message_eng: 'Classroom created successfully',
            status: 200,
            timestamp: Date.now(),
          })
        );
    }),
];