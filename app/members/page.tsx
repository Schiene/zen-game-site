export default function MembersPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">Members</h1>
      <p className="mt-6 leading-8">現在の運営メンバーです。</p>

      <section className="mt-6">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-lg font-bold text-zinc-800">
          S
        </div>
        <p className="font-semibold">代表: Saku</p>
        <ul className="mt-2 list-disc pl-6 leading-8">
          <li>よくいる時間帯: 21:00-24:00</li>
          <li>好きなゲーム: 協力アクション、ローグライク</li>
          <li>一言: 初参加でも話しやすい空気を大事にしています。</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-lg font-bold text-zinc-800">
          K
        </div>
        <p className="font-semibold">副代表: K</p>
        <ul className="mt-2 list-disc pl-6 leading-8">
          <li>よくいる時間帯: 20:00-23:00</li>
          <li>好きなゲーム: 対戦ゲーム、パーティーゲーム</li>
          <li>一言: まずは1回、体験参加してみてください。</li>
        </ul>
      </section>
    </main>
  );
}
