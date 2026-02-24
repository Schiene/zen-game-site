export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-6 leading-8">
        活動理念は「ゲームでつながる、ゆるく続く。」です。上手さや経験よりも、安心して集まれることを大事にしています。
      </p>
      <ul className="mt-4 list-disc pl-6 leading-8">
        <li>活動理念: 気軽に参加できる交流の場をつくる</li>
        <li>雰囲気: ゆるめ、自由参加、途中入退室OK</li>
        <li>注意事項: このサークルはZEN大学の非公認サークルです</li>
      </ul>
    </main>
  );
}
