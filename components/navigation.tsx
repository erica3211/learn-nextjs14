"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
/*
렌더링이란?
Next.js가 리액트 컴포넌트를 브라우저가 이해할 수 있는 html로 변환하는 작업

CSR
모든 렌더링이 클라이언트 측에서 발생
브라우저는 서버로부터 HTML 껍데기와 자바스크립트 번들 파일을 받아 UI를 빌드함

SSR
브라우저의 요청이 있을 때마다 서버에서 HTML을 생성하고, 반환함

Next.js에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
('use client' 사용 여부와 상관없음)렌더링이란?
Next.js가 리액트 컴포넌트를 브라우저가 이해할 수 있는 html로 변환하는 작업

CSR
모든 렌더링이 클라이언트 측에서 발생
브라우저는 서버로부터 HTML 껍데기와 자바스크립트 번들 파일을 받아 UI를 빌드함

SSR
브라우저의 요청이 있을 때마다 서버에서 HTML을 생성하고, 반환함

Next.js에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
('use client' 사용 여부와 상관없음)
*/

export default function Navigation() {
    const path = usePathname();
    const [count, setCount] = useState(0);
    console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>{path === "/" ? " ✅" : ""}
                </li>
                <li>
                    <Link href="/about-us">About us</Link>{path === "/about-us" ? " ✅" : ""}
                </li>
                {/* <li><button onClick={() => setCount((c) => c + 1)}>{count}</button></li> */}
            </ul>
        </nav>
    )
}