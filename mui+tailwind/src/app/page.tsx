import Link from 'next/link';

type RootPageProps = {};

export default function RootPage(props: RootPageProps) {
  return (
    <>
      <Link href="/users">go to UserListPage</Link>
    </>
  );
}
