import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WebRTCComponent from './components/web-rtc/WebRTCComponent';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Enrollment from './pages/lecture/enrollment/Enrollment';
import LectureInfo from './pages/lecture/lecture-info/LectureInfo';
import LectureList from './pages/lecture/lecturelist/LectureList';
import LiveList from './pages/lecture/livelist/LiveList';
import LiveStudent from './pages/live/live-student/LiveStudent';
import LiveTeacher from './pages/live/live-teacher/LiveTeacher';
import Classroom from './pages/student/classroom/Classroom';
import DashboardStudent from './pages/student/dashboard-student/DashboardStudent';
import DashboardTeacher from './pages/teacher/dashboard-teacher/DashboardTeacher';
import EditDashboard from './pages/teacher/edit-dashboard/EditDashboard';
import LectureCreated from './pages/teacher/lecture-created/LectureCreated';
import LectureOpen from './pages/teacher/lecture-open/LectureOpen';
import StudentList from './pages/teacher/student-list/StudentList';
import Login from './pages/user/login/Login';
import MyPage from './pages/user/mypage/MyPage';
import SignInfo from './pages/user/sign-info/SignInfo';
import SignTerms from './pages/user/sign-terms/SignTerms';
import SignUp from './pages/user/signup/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        {/* Lecture Routes */}
        <Route path="/lecture/enrollment" element={<Enrollment />} />
        <Route path="/lecture/info" element={<LectureInfo />} />
        <Route path="/lecture/list" element={<LectureList />} />
        <Route path="/lecture/live-list" element={<LiveList />} />
        
        {/* Live Routes */}
        <Route path="/live/student" element={<LiveStudent />} />
        <Route path="/live/teacher" element={<LiveTeacher />} />
        
        {/* Student Routes */}
        <Route path="/student/classroom" element={<Classroom />} />
        <Route path="/student/dashboard" element={<DashboardStudent />} />
        
        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<DashboardTeacher />} />
        <Route path="/teacher/edit-dashboard" element={<EditDashboard />} />
        <Route path="/teacher/lecture-created" element={<LectureCreated />} />
        <Route path="/teacher/lecture-open" element={<LectureOpen />} />
        <Route path="/teacher/student-list" element={<StudentList />} />
        
        {/* User Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/sign-info" element={<SignInfo />} />
        <Route path="/sign-terms" element={<SignTerms />} />
        <Route path="/signup" element={<SignUp />} />

        {/* CI/CD 구축할 때 사용한 테스트 페이지*/}
        <Route path="/webrtc" element={<WebRTCComponent />} />
      </Routes>
    </Router>
  );
}


export default App;
