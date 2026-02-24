import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-10">
      <section>
        <h1 className="text-3xl font-bold">ZEN大学　ゲームサークル</h1>
        <p className="mt-3 text-xl">ゲームでつながる、ゆるく続く。</p>
        <p className="mt-6 leading-8">
          このサークルは、ZEN大学の学生を中心に、好きなゲームを持ち寄って気軽に遊ぶためのコミュニティです。
        </p>
      </section>

      <section className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/about"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          サークルについて
        </Link>
        <Link
          href="/activities"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          活動内容
        </Link>
        <Link
          href="/join"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          体験参加する
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">はじめに</h2>
        <p className="mt-4 leading-8">
          このサークルは、ZEN大学の学生を中心に、好きなゲームを持ち寄って気軽に遊ぶためのコミュニティです。対戦ゲームや協力ゲーム、雑談しながらの作業通話まで、無理のないペースで集まっています。
        </p>
        <p className="mt-4 leading-8">
          連絡や募集はDiscordで行っています。参加希望の人は、まずはサーバーに入って雰囲気を見てみてください。
        </p>
        <p className="mt-4 leading-8">まずは気軽に、のぞいてみるところからどうぞ。</p>
      </section>
    </main>
  );
}
