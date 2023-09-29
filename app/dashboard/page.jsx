import React from 'react'

const DashboardPage = () => {
  const instagramProfileUrl = 'https://www.instagram.com/junbr0_01/'

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard 대시보드</h1>
      <h2 className="text-xl font-bold mb-5">
        Welcome to Dashboard. 로그인된 사용자의 정보를 보여주는 페이지입니다.
      </h2>
      <p className="mb-5">
        이름: 박준형 <br />
        생년월일: 2001.09.19 <br />
        전화번호: 010-8806-3984 <br />
        주소: 서울특별시 영등포구
      </p>

      <a href={instagramProfileUrl} className="text-blue-500 underline">
        Instagram
      </a>
    </div>
  )
}

export default DashboardPage
