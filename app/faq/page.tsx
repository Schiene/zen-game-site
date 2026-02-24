export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">FAQ</h1>
      <p className="mt-6 leading-8">よくある質問です。</p>
      <ul className="mt-4 list-disc pl-6 leading-8">
        <li>Q. ゲームが上手くなくても参加できますか？ A. 問題ありません。歓迎です。</li>
        <li>Q. 毎回参加しないとだめですか？ A. 自由参加なので都合のよい時だけで大丈夫です。</li>
        <li>Q. ボイスチャットは必須ですか？ A. 必須ではありません。聞き専やテキスト参加も可能です。</li>
      </ul>
    </main>
  );
}
