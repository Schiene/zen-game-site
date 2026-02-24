export default function ActivitiesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">Activities</h1>
      <p className="mt-6 leading-8">
        活動内容は、オンラインでのゲーム募集、作業通話、気になるタイトルの情報共有などです。
      </p>
      <ul className="mt-4 list-disc pl-6 leading-8">
        <li>活動頻度: 週に数回、夜の時間帯が中心</li>
        <li>最近の活動例: 協力ゲーム、対戦ゲーム、雑談しながらの周回プレイ</li>
        <li>ギャラリー・活動記録: 今後スクショ追加予定</li>
      </ul>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">年間イメージ</h2>
        <p className="mt-3 leading-8">
          新学期は新規参加が増え、試験期間はゆるく活動、長期休みは参加者の都合に合わせて不定期開催という流れを想定しています。
        </p>
      </section>
    </main>
  );
}
