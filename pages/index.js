//import Link from 'next/link';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      {/* <Loader show></Loader> */}
      {/* <Link
        prefecth={false}
        href={{
          pathname: '/[username]',
          query: { username: 'jeffd23' },
        }}
      >
        <a>Jeff's profile</a>
      </Link> */}
      <button onClick={() => toast.success('Hello Toast!')}>Toast Me</button>
    </div>
  );
}
