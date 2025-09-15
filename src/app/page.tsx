'use client'
import Image from "next/image";
import { useState } from "react";

export default function GamePage() {
  const [activeTab, setActiveTab] = useState("最新上架");
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = ["最新上架", "人氣排行", "熱門活動", "重要公告", "網頁儲值", "我的遊戲"];
  const screenshots = [
    "/screenshot_1.png",
    "/screenshot_2.png",
    "/screenshot_3.gif",
    "/screenshot_4.png",
    "/screenshot_5.png",
    "/screenshot_6.png",
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-neutral-900">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={120} height={40} />
        </div>
        <nav className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium hover:text-gray-300 ${
                activeTab === tab ? "text-white" : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="flex space-x-4 items-center">
          <button>
            <Image src="/search_icon.svg" alt="search_icon" width={22} height={22} />
          </button>
          <button className="text-sm">登入</button>
          <button className="text-sm">註冊</button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full h-[520px]">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        {/* 圖片漸層 */}
        <Image
          src="/gradient.png"
          alt="gradient overlay"
          fill
          className="object-cover"
        />

        {/* Game Detail */}
        <div className="absolute bottom-0 left-0 w-full px-10 py-6">
          <div className="bg-black/60 p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <Image
                src="/game-icon.png"
                alt="Game Icon"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-xl font-bold">勝利女神妮姬</h2>
                <p className="text-sm text-gray-400">GODDESS OF VICTORY: NIKKE</p>
              </div>
              <button className="ml-auto px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-medium">
                前往遊戲
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
              第3人稱射擊手遊。集中於《天命之子》所有Live2D ver 3.3和2.5D PAPER FOLDING技術原理的戰鬥動作。
              故事背景講述在傾外星人淘汰的地球，代替人類戰鬥的“少女”的故事。
            </p>
          </div>
        </div>
      </section>

      {/* 輪播 */}
      <section className="relative mt-10 px-6">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {screenshots.map((src, i) => (
              <div
                key={i}
                className="basis-1/2 flex-shrink-0 px-2"
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`screenshot-${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 左右切換按鈕 */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </section>

      {/* 下方小縮圖（置中） */}
      <section className="px-6 py-8 flex justify-center gap-4">
        {screenshots.map((src, i) => (
          <div key={i} className="w-[120px] h-[80px] bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`thumb-${i}`}
              width={120}
              height={80}
              className="object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
