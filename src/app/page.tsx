"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".fade-in-section, .fade-in-up, .fade-in-left, .fade-in-right, .stagger-animation"
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="fade-in-up w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative">
            <Image
              src="/profile.jpg"
              alt="보관남 프로필 사진"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white"
              priority
            />
          </div>

          {/* Main Title */}
          <h1 className="fade-in-up text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            보관남
          </h1>

          {/* Catchphrase */}
          <p className="fade-in-up text-xl md:text-2xl text-slate-600 mb-8 font-light">
            보험을 어려움 없이, 이해하기 쉽게
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📩 문의하기
            </Link>
            <Link
              href="https://blog.naver.com/shame5553"
              target="_blank"
              className="border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              📝 블로그 보기
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="fade-in-section py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              안녕하세요, 보관남입니다
            </h2>
            <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Introduction Text */}
            <div className="fade-in-left">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
                <strong className="text-slate-800">
                  보험관리해주는남자, 보관남입니다.
                </strong>
                <br />
                <br />
                보험이 어렵고 귀찮은 사람들을 대신해, 쉽게 설명하고 끝까지
                챙겨드립니다.
              </p>
            </div>

            {/* Platform Links */}
            <div className="fade-in-right space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                운영 플랫폼
              </h3>

              <Link
                href="https://blog.naver.com/shame5553"
                target="_blank"
                className="stagger-animation stagger-delay-1 flex items-center p-4 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">
                    네이버 블로그
                  </div>
                  <div className="text-sm text-slate-600">
                    보험 정보와 팁을 공유합니다
                  </div>
                </div>
              </Link>

              <div className="stagger-animation stagger-delay-2 flex items-center p-4 border border-slate-200 rounded-lg opacity-70">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📷</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">
                    인스타그램 / 스레드
                  </div>
                  <div className="text-sm text-slate-600">
                    일상과 보험 이야기 (준비 중)
                  </div>
                </div>
              </div>

              <Link
                href="https://cafe.naver.com/ffo2"
                target="_blank"
                className="stagger-animation stagger-delay-3 flex items-center p-4 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">
                    금융스터디 카페
                  </div>
                  <div className="text-sm text-slate-600">
                    함께 배우고 성장하는 공간
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiting Section */}
      <section className="fade-in-section py-20 px-6 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-in-up text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            함께하실 분을 찾습니다
          </h2>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto mb-12"></div>

          <div className="fade-in-up bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">
              보험을 통해 함께 성장하고 싶은 분들을 찾고 있습니다.
              <br />
              배우고 싶으신 분, 팀으로 함께하고 싶으신 분, 언제든지 연락주세요.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="stagger-animation stagger-delay-1 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  배우고 싶은 분
                </h3>
                <p className="text-sm text-slate-600">
                  보험에 대해 체계적으로 학습하고 싶은 분
                </p>
              </div>

              <div className="stagger-animation stagger-delay-2 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  함께하고 싶은 분
                </h3>
                <p className="text-sm text-slate-600">
                  팀워크를 중시하며 협업하고 싶은 분
                </p>
              </div>

              <div className="stagger-animation stagger-delay-3 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">
                  성장하고 싶은 분
                </h3>
                <p className="text-sm text-slate-600">
                  지속적인 발전과 성장을 추구하는 분
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="stagger-animation stagger-delay-4 inline-block bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💼 리쿠르팅 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in-section py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="fade-in-up text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              문의하기
            </h2>
            <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto mb-8"></div>
            <p className="fade-in-up text-lg text-slate-600 max-w-2xl mx-auto">
              보험 상담이나 리쿠르팅, 협업 등 어떤 문의든 환영합니다.
              <br />
              편하신 방법으로 연락주세요!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div className="stagger-animation stagger-delay-1 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <span className="text-2xl text-white">📧</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">이메일</h3>
              <p className="text-sm text-slate-600 mb-3">보험.관리@email.com</p>
              <p className="text-xs text-slate-500">(연락처 준비 중)</p>
            </div>

            {/* Phone */}
            <div className="stagger-animation stagger-delay-2 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">전화 상담</h3>
              <p className="text-sm text-slate-600 mb-3">010-0000-0000</p>
              <p className="text-xs text-slate-500">(연락처 준비 중)</p>
            </div>

            {/* KakaoTalk */}
            <div className="stagger-animation stagger-delay-3 bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors">
                <span className="text-2xl text-white">💬</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">카카오톡</h3>
              <p className="text-sm text-slate-600 mb-3">오픈채팅</p>
              <p className="text-xs text-slate-500">(링크 준비 중)</p>
            </div>

            {/* Blog Comment */}
            <Link
              href="https://blog.naver.com/shame5553"
              target="_blank"
              className="stagger-animation stagger-delay-4 bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-colors">
                <span className="text-2xl text-white">📝</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">블로그 댓글</h3>
              <p className="text-sm text-slate-600 mb-3">네이버 블로그</p>
              <p className="text-xs text-green-600">✓ 이용 가능</p>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="fade-in-up mt-12 text-center">
            <div className="bg-slate-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-slate-800 mb-3">
                📋 문의 시 도움이 되는 정보
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 현재 가입한 보험 종류 (생명보험, 손해보험 등)</li>
                <li>• 관심 있는 분야 (보험 학습, 리쿠르팅, 협업 등)</li>
                <li>• 희망하는 상담 방식 (전화, 메신저, 대면 등)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="fade-in-section bg-slate-900 border-t border-slate-700 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="">
            <p className="text-white text-sm md:text-base font-medium">
              © 2024 보관남 | 보험, 어렵지 않게.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
