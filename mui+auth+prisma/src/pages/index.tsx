import Link from 'next/link';

type TopPageProps = {};

export default function TopPage(props: TopPageProps) {
  return (
    <>
      <Link href="/users">go user list page</Link>
    </>
  );
}
