import Link from 'next/link';

type RootPageProps = {};

export default function RootPage(props: RootPageProps) {
  return (
    <>
      <Link href="/users" className="mb-1">
        go to UserListPage
      </Link>
    </>
  );
}
