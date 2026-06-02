"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function SceneWrapper({
  mouseRef,
}: {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  return <HeroScene mouseRef={mouseRef} />;
}
